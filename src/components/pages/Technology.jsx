import React,{ useState, useEffect } from 'react';
import './../styles/Technology.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios'

const Technology = () => {
    const [technology, setTechnology] = useState([]);
    
    useEffect(() => {
        const getTechnology = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/technology')
                setTechnology(res.data.data)
            } catch (error) {
                console.log(error)
            }
        };
        getTechnology()
    }, [])
    return (
       <div>
        <Header />
         <section>
            
            
            <div className='container'>
                <div className='technology_top-content'>
                    <h6 className='subtitle'>Our Technology</h6>
                    <h2>Let's have a look from our  
                        <span className='highlight'> recent technology</span>
                    </h2>
                </div>
                <div className='technology_wrapper'>
                   {
                    technology.map((item, index) => (
                        <div className='technology_item' key={index}>
                        <h3>{item.title}</h3>
                        <div className='technology_img'>
                            <img src={`http://localhost:5000/${item.photo}`} alt="" />
                        </div>
                        <p className='description technology_desc'>{item.subtitle}</p>
                        <p className='description technology_desc'>{item.desc}</p>
                        <div>
                            <a href={item.linkUrl} className='learn_more'><i class="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
           
        </section>
        <Footer />
       </div>
    );
};

export default Technology;