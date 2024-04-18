// Contact.js
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    showToast(name, email);
  };

  const showToast = (name, email) => {
    toast.success(`Message sent successfully! Name: ${name}, Email: ${email}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
