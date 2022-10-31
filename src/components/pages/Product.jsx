import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({project}) => {
    const {title, subtitle, desc, url, photo} = project;

    return (
        <div>
            <Link to="productdetail">
            <div className='project_item'>
                        <h3>{title}</h3>
                        <div className='project_img'>
                        <img src={`http://localhost:5000/${photo}`} alt="" />
                        </div>
                        <p className='description project_desc'>{subtitle}</p>
                        <p className='description project_desc'>{desc}</p>
                        <div>
                            <a href={url} className='learn_more'><i class="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
            </Link>
        </div>
    );
};

export default Product;