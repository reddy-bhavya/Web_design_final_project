import React, { useState } from "react";
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        description: "",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const addProduct = async () => {
        try {
            // Add product logic
            if (!image) {
                toast.error('Please upload an image', { position: "top-right" });
                return;
            }

            const formData = new FormData();
            formData.append('product', image);

            const uploadResponse = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            });
            
            const uploadData = await uploadResponse.json();
            if (!uploadData.success) {
                toast.error('Error uploading image', { position: "top-right" });
                return;
            }

            const product = { ...productDetails, image: uploadData.image_url };

            const addProductResponse = await fetch('http://localhost:3000/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            const addProductData = await addProductResponse.json();
            if (!addProductData.success) {
                toast.error('Error adding product', { position: "top-right" });
                return;
            }

            toast.success('Product added successfully', { position: "top-right" });
            setProductDetails({
                name: "",
                image: "",
                category: "women",
                description: "",
                new_price: "",
                old_price: ""
            });
            setImage(null);
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error('Failed to add product', { position: "top-right" });
        }
    };

    return (
        <div className='add-product'>
            <Typography variant="h5" gutterBottom>
                Add New Product
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Product Title"
                        value={productDetails.name}
                        onChange={changeHandler}
                        type="text"
                        name='name'
                        placeholder='Enter product title'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Product Description"
                        value={productDetails.description}
                        onChange={changeHandler}
                        type="text"
                        name="description"
                        placeholder="Enter product description"
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Price"
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="number"
                        name="old_price"
                        placeholder='Enter price'
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Offer Price"
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="number"
                        name="new_price"
                        placeholder='Enter offer price'
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={productDetails.category}
                            onChange={changeHandler}
                            name="category"
                        >
                            <MenuItem value="switchgear">Switch Gear</MenuItem>
                            <MenuItem value="motor">Motor</MenuItem>
                            <MenuItem value="instrument">Instrument</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={addProduct} variant="contained" fullWidth>
                        ADD PRODUCT
                    </Button>
                </Grid>
            </Grid>
            <ToastContainer /> {/* Add ToastContainer here */}
        </div>
    );
};

export default AddProduct;
