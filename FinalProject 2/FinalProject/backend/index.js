// All Backend codes
// npm run devStart

// Define port  number
const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");

require('dotenv').config();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

//Store items
// let storeItems = new Map([
//     [1, {priceInCents : 10000, name : "Item to Buy number 1"}],
//     [2, {priceInCents : 20000, name : "Item to Buy number 2"}],
// ]);

const samplePurchaseOrder = {
    id : 1,
    customer_firstname : "Reky",
    customer_lastname : "George",
    product_id : [4, 2],
    product_name : ["Motor01", "SwtichGear_01"],
    product_price : [190,199],
    ordered_quantity : [10,9]
}

// app instance
const app = express();

// With help of express.json whatever reponse we get will be in json format
app.use(express.json());
app.use(cors()); 


// Connect a Mongo DB 

//mongoose.connect("mongodb://localhost:27017/gearKart")
mongoose.connect("mongodb+srv://rekygeorge:a2WnWBsn24JOxor2@cluster0.b3gzymu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/gearKart")

// const connectDB=() =>{
//     try {
//         // Connect to MongoDB Atlas using Mongoose
//         mongoose.connect("mongodb+srv://rekygeorge:a2WnWBsn24JOxor2@cluster0.b3gzymu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/gearKart", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true, // To suppress deprecation warning for collection.ensureIndex
//             useFindAndModify: false // To suppress deprecation warning for collection.findAndModify
//         });
    
//         // Connection successful, log success message
//         console.log("CoSnnected to MongoDB Atlas successfully!");
//     } catch (error) {
//         // Connection failed, log error message
//         console.error("Error connecting to MongoDB Atlas:", error.message);
//     }
// }

// connectDB();


// API Creation
app.get("/", (req, res) => {
    res.send("Express App is running");
})

// Image Storage engine
const storage  = multer.diskStorage({
    destination: './upload/images',
    filename : (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

//Creating Upload Endpoints for Images

// This end point is to access the images present in the /images folder
app.use("/images", express.static('upload/images')) // Static endpoint for images

// This end point is used to upload the images.
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success : 1,
        image_url : `http://localhost:${PORT}/images/${req.file.filename}`
    })
})

// Before we upload any obeject in MongoDB database, we need to create a collection(Schema).
const Product = mongoose.model("Product",{
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    new_price : {
        type : Number,
        required : true
    },
    old_price : {
        type : Number,
        required : true
    },
    date:{
        type : Date,
        default : Date.now()
    },
    available : {
        type : Boolean,
        default : true
    }
})

// Enrollment form collection
const Enrollment = mongoose.model("Enrollment",{
    id : {
        type : Number,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now()
    },
    phonenumber : {
        type : String,
        required : true
    },
})

// Purchase Order 
const PurchaseOrder = mongoose.model("PurchaseOrder",{
    id : {
        type : Number,
        required : true
    },
    customer_firstname : {
        type : String
    },
    customer_lastname : {
        type : String
    },
    product_id : {
        type : [Number],
    },
    product_name : {
        type : [String]
    },
    product_price : {
        type : [Number]
    },
    ordered_quantity : {
        type : [Number]
    }
})

const Subscriber = mongoose.model('Subscriber', {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  // Define endpoint to handle newsletter subscriptions
  app.post('/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      const subscriber = new Subscriber({ email });
      await subscriber.save();
      res.status(200).json({ message: 'Successfully subscribed to newsletter' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to subscribe to newsletter' });
    }
  });
  

// Endpoint for "Add Enrollment"
app.post('/addenrollment', async (req, res) => {
    let enrollments = await Enrollment.find({});
    let id;
    if(enrollments.length > 0) {
        let enrollment_array = enrollments.slice(-1);
        let last_enrollment= enrollment_array[0];
        id = last_enrollment.id + 1;
    }else{
        id = 1;
    }

    const enrollment = new Enrollment({
        id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    });    
    console.log(enrollment);
    await enrollment.save();
    console.log("Saved");
    res.json({
        success : true,
        name : req.body.name
    })
})



// Endpoint for "Add Product"
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product= last_product_array[0];
        id = last_product.id + 1;
    }else{
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });    
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success : true,
        name : req.body.name
    })
})

// Crating API for deleting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Removed");
    res.json({
        success : true,
        name : req.body.name
    })
})

// Crating API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Crating API for getting all purhcase orders
app.get('/purchaseorders', async (req, res) => {
    let po = await PurchaseOrder.find({id : 1});
    console.log("All Products Fetched");
    res.send(po);
})

// Add purchase order 

// Crating API for getting the purhcase order based on the order id
app.get('/purchaseorder?:id', async (req, res) => {
    const id = req.query.id; // Get the id parameter from the request
    let po = await PurchaseOrder.find({ id: id }); // Use the id parameter in the query
    console.log("Purchase Order Fetched for ID:", id);
    res.send(po);
})


//Schema creating for User model
const Users= mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String, 
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Creating Endpoint for registering the user
app.post('/signup', async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false, errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] =0;
        
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data ={
        user: {
            id:user.id
        }
    }
    const token =jwt.sign(data,'secret_ecom');
    res.json({success:true, token})


})

// creating endpoint for user login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true,token});
        }
        else {
            res.json({success:false,error:"Wromg Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

//creating endport for new collection data
app.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

// creating endpoint for popular in women section
app.get('/popularinwomen', async (req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
})

// creating middleware to fetch user
    const fetchUser = async (req,res,next)=>{
        const token = req.header('auth-token');
        if(!token){
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
        else{
            try{
                const data = jwt.verify(token,'secret_ecom');
                req.user = data.user;
                next();
            }catch(error){
                res.status(401).send({errors:"please authenticate using a valid token"})
            }
        }
    }

// creating endpoint for adding products in cartdata
app.post('/addtocart', fetchUser,async(req,res)=>{
    //console.log(req.body,req.user); 
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

// creating endpoint to remove product from cartdata
app.post('/removefromcart', fetchUser,async(req,res)=> {
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

// creating endpoint to clear the cartdata
app.post('/clearcart', fetchUser,async(req,res)=> {
    console.log("Cleared",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    // if(userData.cartData[req.body.itemId]>0)
    // userData.cartData[req.body.itemId] = 0;
    // console.log(Object.keys(userData.cartData).length);
    for(let objKey = 0; objKey < Object.keys(userData.cartData).length ; objKey++){
        userData.cartData[objKey] = 0;
    }
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Cleared Cart")
})

// creating endpoint to get cart data
app.post('/getcart', fetchUser, async(req,res)=>{
    console.log("GetCart");
    let userData= await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

// Payment portal endpoints
app.post("/create-checkout-session", async (req, res) => {
    try{
        console.log("req.body.items : ", req.body.items);
        let products = await Product.find({});
        console.log("All Products Fetched");
        console.log("typeof products : " , typeof products); // typeof - object
        // console.log("typeof storeItems : ", typeof storeItems); // typeof - object
        // console.log("storeItems : ", storeItems);
        
        // Convert array of objects to a Map
        const storeItems = new Map();

        tempProductIdList = [];
        tempQuantityList = [];
        tempPriceList = [];
        tempNameList =[];

        products.forEach(obj => {
            storeItems.set(obj.id, obj); // Set the key-value pair in the Map
        });

        let po = await PurchaseOrder.find({});
        let id;
        if(po.length > 0) {
            let po_array = po.slice(-1);
            let last_po= po_array[0];
            id = last_po.id + 1;
        }else{
            id = 1;
        }
    
        for (const obj of req.body.items){
            console.log("obj.id : ", obj.id);
            tempProductIdList.push(obj.id);
            tempQuantityList.push(obj.quantity);
            tempNameList.push(storeItems.get(obj.id).name);
            tempPriceList.push(storeItems.get(obj.id).new_price);
        }

        console.log("tempProductIdList : ", tempProductIdList);
        console.log("tempQuantityList : " , tempQuantityList);
        console.log("tempNameList : ", tempNameList);
        console.log("tempPriceList : ", tempPriceList);

        tempPO = {
            id : id,
            customer_firstname : "Reky",
            customer_lastname : "George",
            product_id : tempProductIdList,
            product_name : tempNameList,
            product_price : tempPriceList,
            ordered_quantity : tempQuantityList
        }

        const purchaseOrder = new PurchaseOrder(tempPO);    
        console.log(purchaseOrder);
        await purchaseOrder.save();

        console.log("process.env.STRIPE_PRIVATE_KEY" , process.env.STRIPE_PRIVATE_KEY);
        const session = await stripe.checkout.sessions.create({
            payment_method_types : ["card"],
            mode : "payment",
            line_items : req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                
                return {
                    price_data :  {
                        currency : 'usd',
                        product_data : {
                            name : storeItem.name ,
                        },
                        // unit_amount : storeItem.priceInCents,
                        unit_amount : storeItem.new_price * 100,
                    },
                    quantity : item.quantity,
                }
            }),
            success_url : `${process.env.CLIENT_URL}/success?id=${purchaseOrder.id}`,
            cancel_url : `${process.env.CLIENT_URL}/failed`,

        })

        

        console.log("response : ");
        res.json({ url : session.url })

    }catch(e){
        res.status(500).json({ error: e.message })
    }

    
})

// Crating API for sorting products by price high to low
app.get('/sortbypricehigh', async (req, res) => {
    let products = await Product.find({}).sort({ new_price: -1 }); // Sort products by new_price in descending order
    console.log("Products sorted by price high to low");
    res.send(products);
});
// Crating API for sorting products by price low to high
app.get('/sortbypricelow', async (req, res) => {
    let products = await Product.find({}).sort({ new_price: 1 }); // Sort products by new_price in ascending order
    console.log("Products sorted by price low to high");
    res.send(products);
});
// Crating API for sorting products by date added
app.get('/sortbydateadded', async (req, res) => {
    let products = await Product.find({}).sort({ date: -1 }); // Sort products by date in descending order
    console.log("Products sorted by date added");
    res.send(products);
});



app.listen(PORT, (error) => {
    if(!error){
        console.log("Server is running on port " + PORT);
    }
    else{
        console.log("Error : " + error);
    }
});
