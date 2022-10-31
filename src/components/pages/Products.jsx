import React,{ useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './../styles/Project.css';
import axios from "axios";
import Product from './Product';


const Products = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const getProject = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/projects')
                setProjects(res.data.data)
            } catch (error) {
                console.log(error)
            }
        };
        getProject()
    }, [])
    return (
        <div>
            <Header />
            <section>
           <div className='container'>
                <div className='project_top-content'>
                    <h6 className='subtitle'>Our Project</h6>
                    <h2>Let's have a look from our  
                        <span className='highlight'> recent project</span>
                    </h2>
                </div>
                <div className='project_wrapper'>
                   {
                    projects.map(project => <Product project={project} key={project._id}></Product>)
                   }
                </div>
            </div>
           
        </section>
        <Footer />
        </div>
    );
};

export default Products;