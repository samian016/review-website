import React from 'react';
import './Homes.css';

const Homes = (props) => {
    const {name,details,img}=props.home;
    return (
        <div>
            <div className="details">
                <div className="details-img">
                    <img src={img} alt=""></img>
                </div>
                <h5 className="title">{name}</h5>
                <h6 className="blog">{details}</h6>
                <button className="btn-listt">Join Now</button>
            </div>
        </div>
    );
};

export default Homes;