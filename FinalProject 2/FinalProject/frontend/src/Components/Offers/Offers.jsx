// import React, { useEffect } from 'react'
// import './Offers.css'
// import exclusive_image from '../Assets/exclusive_image.png'

// export const Offers = () => {

//   return (
//     // <div className='offers'>
//     //     <div className="offers-left">
//     //         <h1>Exclusive Offers For You</h1>
//     //         <p>ONLY ON BEST SELLERS PRODUCTS</p>
//     //         <button>Check Now</button>
//     //     </div>
//     //     <div className="offers-right">
//     //         <img src={exclusive_image} alt="" />
//     //     </div>
//     // </div>
//     <>
//       <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
//         <div class="container">
//           <div class="d-sm-flex align-items-center justify-content-between">
//               <div>
//                   <h1>A one stop solutions for all your <span class="text-warning"> Industrial Products </span></h1>
//                   <p class="lead my-4">
//                       Focused on offering top industrial applications
//                       at the best prices, ensuring quality and affordability for all customers
//                   </p>
//                   <button
//                       class="btn btn-primary btn-lg"
//                       data-bs-toggle="modal"
//                       data-bs-target="#enroll"
//                   >
//                       Start The Enrollment
//                   </button>
//               </div>
//               <img
//               class="img-fluid w-50 d-none d-sm-block"
//               src="assets/images/Carousel/1.avif"
//               alt=""
//               />

//           </div>
//         </div>
//       </section>

//       <div
//       class="modal fade"
//       id="enroll"
//       tabindex="-1"
//       aria-labelledby="enrollLabel"
//       aria-hidden="true"
//     >
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="enrollLabel">Enrollment</h5>
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div class="modal-body">
//             <p class="lead">Fill out this form and we will get back to you</p>
//             <form>
//               <div class="mb-3">
//                 <label for="first-name" class="col-form-label">
//                   First Name:
//                 </label>
//                 <input type="text" class="form-control" id="first-name" />
//               </div>
//               <div class="mb-3">
//                 <label for="last-name" class="col-form-label">Last Name:</label>
//                 <input type="text" class="form-control" id="last-name" />
//               </div>
//               <div class="mb-3">
//                 <label for="email" class="col-form-label">Email:</label>
//                 <input type="email" class="form-control" id="email" />
//               </div>
//               <div class="mb-3">
//                 <label for="phone" class="col-form-label">Phone:</label>
//                 <input type="tel" class="form-control" id="phone" />
//               </div>
//             </form>
//           </div>
//           <div class="modal-footer">
//             <button
//               type="button"
//               class="btn btn-secondary"
//               data-bs-dismiss="modal"
//             >
//               Close
//             </button>
//             <button type="button" class="btn btn-primary">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>

//     </>    
//   )
// }


import React, { useEffect, useState } from 'react';
import carousel_01 from '../Assets/carousel_01.avif'


const Offers = () => {

  const [enrollmentDetails,setEnrollmentDetails]= useState({
    firstname:"",
    lastname:"chec1",
    email:"check2",
    phonenumber:"check3"
  })
  
  const changeHandler =(e) =>{
    setEnrollmentDetails({...enrollmentDetails,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // Ensure jQuery is loaded
    script.async = true;
    document.body.appendChild(script);

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'; // Bootstrap JavaScript
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  const AddEnrollment = async () => {
    
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    console.log("firstname : " , firstname);
    enrollmentDetails.firstname = firstname;

    let enrollment = {
      firstname,
      lastname,
      email,
      phonenumber: phone
    };
    console.log(enrollmentDetails);

    fetch("http://localhost:3000/addenrollment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollment)
    })
    .then(response => {
      console.log(response);
      if (response.ok) {
        console.log("Enrollment details sent successfully");
        // Reset the enrollment details state
        setEnrollmentDetails({
          firstname: "",
          lastname: "",
          email: "",
          phone: ""
        });
      } else {
        console.error("Failed to send enrollment details");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });

  }

  return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>A one stop solutions for all your <span className="text-warning"> Industrial Products </span></h1>
              <p className="lead my-4">
                Focused on offering top industrial applications
                at the best prices, ensuring quality and affordability for all customers
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-toggle="modal"
                data-target="#enroll"
              >
                Start The Enrollment
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={carousel_01}
              alt=""
            />

          </div>
        </div>
      </section>

      <div className="modal fade" id="enroll" tabIndex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="lead">Fill out this form and we will get back to you</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input type="text" className="form-control" id="firstname" />
                </div>
                <div className="mb-3">
                  <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">Email:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="col-form-label">Phone:</label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={()=>{AddEnrollment()}} >Submit</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Offers;
