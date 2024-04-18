import React from 'react';
import './Footer.css';
import gear_kart_logo from '../Assets/Gear-Cart-Logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#171717' }}>
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/" className="text-white">Shop</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/switchgears" className="text-white">Switch Gears</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/motors" className="text-white">Motors</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/instruments" className="text-white">Instruments</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/" className="text-white">Contact</Link>
            </h6>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              GearKart is your one-stop destination for all industrial instrument needs. We offer a wide range of high-quality products sourced from trusted manufacturers to ensure durability and reliability. Whether you're in need of precision measurement tools, industrial machinery, or electronic instruments, GearKart has you covered.
            </p>
            <p>
              Our commitment to customer satisfaction drives us to provide exceptional service and support at every step of your shopping journey. With secure online transactions, fast shipping, and responsive customer support, GearKart strives to make your shopping experience seamless and hassle-free.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-5">
        <a href="https://www.instagram.com/" className="text-white me-4">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/" className="text-white me-4">
          <img src={pintrest_icon} alt="Pinterest" />
        </a>
        <a href="https://www.whatsapp.com/" className="text-white me-4">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </a>
      </section>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="#">
          GearKart.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
