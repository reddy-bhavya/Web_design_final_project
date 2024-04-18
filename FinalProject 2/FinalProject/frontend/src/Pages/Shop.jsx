import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import NewCollections from '../Components/NewCollections/NewCollections';
import Offers from '../Components/Offers/Offers';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Shop = () => {
  return (
    <div>
      <Hero />
      <NewCollections />
      <Offers />
      <NewsLetter />

      {/* FAQ Section */}
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Where exactly are you located?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">We are proudly headquartered in the vibrant city of Boston, Massachusetts. Nestled amidst the historical charm and bustling streets, our main location sits at 50 Main Street, offering a convenient and accessible hub for all our valued customers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How much does it cost to attend?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">At E-Commerce Website, we are committed to providing valuable resources and services to our community without any cost. That's right – attending our events, accessing our resources, and engaging with our content are all completely free of charge.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    What do I need to Know?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    How Do I sign up?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <p>Signing up with E-Commerce Website is quick, easy, and hassle-free. Follow these simple steps to join our community and gain access to exclusive resources and opportunities:</p>

                    <p> Visit Our Website: Head to our website at www.ecommercewebsite.com and navigate to the registration page.</p>

                    <p>Create Your Account: Click on the "Sign Up" or "Register" button to begin the registration process. You'll be prompted to provide some basic information, such as your name, email address, and a password of your choice.</p>

                    <p>Complete Your Profile: Once your account is verified, log in to your E-Commerce Website account and complete your profile. Add details such as your location, industry interests, and any other information you'd like to share with our community.</p>

                    <p> Explore Our Platform: With your account set up, you're ready to explore all that E-Commerce Website has to offer. Browse our extensive collection of resources, engage with fellow members in our forums, and stay updated on the latest industry trends and events.</p>

                    <p> Stay Connected: Keep an eye on your inbox for updates, event invitations, and exclusive offers from E-Commerce Website. Be sure to follow us on social media platforms to stay connected with our community and receive real-time updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Our Key Products Section */}
       <section id="instructors" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">Value Propositions</h2>
          <p className="lead text-center text-white mb-5">
            Best prices here !
          </p>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">Quality Assurance</h3>
                  <p className="card-text">
                    Browse through our extensive collection of industrial products and find exactly what you need at the best prices. With top-notch quality and exceptional service, we are your go-to destination for all your industrial needs.
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">Customer Satisfaction</h3>
                  <p className="card-text">
                    Discover a wide range of industrial products tailored to meet your specific requirements. Our commitment to quality and customer satisfaction makes us the preferred choice for industrial procurement.
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">Wide Selection</h3>
                  <p className="card-text">
                    Elevate your industrial procurement experience with our comprehensive range of products and unbeatable prices. Trust us to deliver superior quality and exceptional value every time.
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">Convenient Shopping</h3>
                  <p className="card-text">
                    Experience unparalleled convenience and reliability in industrial procurement with our top-rated products and exceptional service. Shop with us for the best deals and hassle-free buying experience.
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};
