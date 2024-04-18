import './NewsLetter.css';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import main_page_01 from '../Assets/main_page_01.jpeg';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Reset the email input
    setEmail('');

    // Show a success toast notification
    toast.success('Subscribed!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // const handleSubscribe = async () => {
  //   try {
  //     if (!email) {
  //       toast.error('Please enter your email address', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       return;
  //     }

  //     // Call the backend API to subscribe
  //     await axios.post('/subscribe', { email });

  //     // Reset the email input
  //     setEmail('');

  //     // Show a success toast notification
  //     toast.success('🎉 You have successfully subscribed!', {
  //       position: 'top-right',
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   // } catch (error) {
  //   //   // Show an error toast notification
  //   //   // toast.error('🎉 You have successfully subscribed!', {
  //   //   //   position: 'top-right',
  //   //   //   autoClose: 3000,
  //   //   //   hideProgressBar: false,
  //   //   //   closeOnClick: true,
  //   //   //   pauseOnHover: true,
  //   //   //   draggable: true,
  //   //   //   progress: undefined,
  //   //   // });
  //   // }
  // };

  return (
    <section id="news" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <img src={main_page_01} className="img-fluid" alt="" />
          </div>
          <div className="col-md p-5">
            <h2>Buy The Best Products</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-light" type="button" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default NewsLetter;
