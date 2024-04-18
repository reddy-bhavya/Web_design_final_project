import React, { useEffect } from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel_02 from '../Assets/carousel_02.jpg'
import carousel_03 from '../Assets/carousel_03.jpg'
import carousel_04 from '../Assets/carousel_04.jpg'
import carousel_05 from '../Assets/carousel_05.jpg'
import carousel_06 from '../Assets/carousel_06.jpg'
import carousel_07 from '../Assets/carousel_07.jpeg'
import carousel_08 from '../Assets/carousel_08.png'
import carousel_09 from '../Assets/carousel_09.jpg'
import carousel_10 from '../Assets/carousel_09.jpeg'
 
export const Hero = () => {
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

  return (
    // <div className="hero">
        
    //     <div className="hero-left">
    //         <h2>NEW ARRIVALS ONLY</h2>
    //         <div>
    //             <div className="hero-hand-icon">
    //                 <p>new</p>
    //                 <img src={hand_icon} alt="" />
    //             </div>
    //             <p>collections</p>
    //             <p>for everyone</p>
    //         </div>
    //         <div className="hero-latest-btn">
    //             <div>Latest Collection</div>
    //             <img src={arrow_icon} alt="" />
    //         </div>

    //     </div>

    //     <div className="hero-right">
    //         <img src={hero_image} alt="" />
    //     </div>
    // </div>

    // <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src={carousel_02} className="d-block w-100" alt="First slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={carousel_03} className="d-block w-100" alt="Second slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={carousel_04}className="d-block w-100" alt="Third slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={carousel_05} className="d-block w-100" alt="Fourth slide" />
    //       </div>
    //       {/* <div className="carousel-item">
    //         <img src="image5.jpg" className="d-block w-100" alt="Fifth slide" />
    //       </div> */}
    //     </div>
    //     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>

    <div id="carouselFadeExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src={carousel_03} alt="First slide" style={{ width: '900px', height: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
            <h5 style={{ textAlign: 'center', fontSize: '8rem' }}>Shop Now!!</h5>
            <p style={{ textAlign: 'center', fontSize: '2rem' }}>Welcome to one stop destination for all of your Instruments needs.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src={carousel_05} alt="Second slide" style={{ width: '900px', height: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
            <h5 style={{ textAlign: 'center', fontSize: '8rem' }}>Big Banner Sale is Live!! </h5>
            <p style={{ textAlign: 'center', fontSize: '2rem' }}>Get anything you want at a discounted price🎉</p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src={carousel_06} alt="Third slide" style={{ width: '900px', height: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
            <h5 style={{ textAlign: 'center', fontSize: '8rem' }}>Shop before its late</h5>
            <p style={{ textAlign: 'center', fontSize: '2rem' }}>Get all the needed instruments at a single destination.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src={carousel_09} alt="Fourth slide" style={{ width: '900px', height: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
            {/* <h5 style={{ textAlign: 'center', fontSize: '8rem' }}>Fourth slide label</h5>
            <p style={{ textAlign: 'center', fontSize: '2rem' }}>Some representative placeholder content for the fourth slide.</p> */}
            </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselFadeExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselFadeExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
    </div>
    
  )
}
