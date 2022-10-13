import React from 'react';
import './../styles/Testimonial.css';
import Slider from 'react-slick';
import ava01 from './../../images/ava-1.jpg';
import ava02 from './../../images/ava-2.jpg';
import ava03 from './../../images/ava-3.jpg';

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
      };
    return (
       <section>
       <div className="container">
        <div className="slider_content-top">
            <h6 className='subtitle'>Testimonials</h6>
            <h2>Trusted by more then <span className='highlight'>2,000 customers</span></h2>
        </div>
        <div className="slider_wrapper">
        <Slider {...settings}>
            <div className="slider_item">
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum odit eligendi maiores exercitationem unde non laborum sunt enim, quos doloribus. Nam beatae natus minima doloremque sequi. Dicta, quaerat laborum! Quisquam quia aperiam nam sit. Commodi a fugiat iste accusamus?</p>
                <div className="customer_details">
                    <div className="customer_img">
                        <img src={ava02} alt="" />
                    </div>
                    <div>
                        <h5 className='customer_name'>Kobita</h5>
                        <p className='description'>CEO, Work-Shop</p>
                    </div>
                </div>
            </div>
            <div className="slider_item">
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum odit eligendi maiores exercitationem unde non laborum sunt enim, quos doloribus. Nam beatae natus minima doloremque sequi. Dicta, quaerat laborum! Quisquam quia aperiam nam sit. Commodi a fugiat iste accusamus?</p>
                <div className="customer_details">
                    <div className="customer_img">
                        <img src={ava03} alt="" />
                    </div>
                    <div>
                        <h5 className='customer_name'>Sohel</h5>
                        <p className='description'>CEO, IT-CO</p>
                    </div>
                </div>
            </div>
            <div className="slider_item">
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum odit eligendi maiores exercitationem unde non laborum sunt enim, quos doloribus. Nam beatae natus minima doloremque sequi. Dicta, quaerat laborum! Quisquam quia aperiam nam sit. Commodi a fugiat iste accusamus?</p>
                <div className="customer_details">
                    <div className="customer_img">
                        <img src={ava01} alt="" />
                    </div>
                    <div>
                        <h5 className='customer_name'>Fahad</h5>
                        <p className='description'>CEO, Programming-Hero</p>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
       </div>
       </section>
    );
};

export default Testimonial;