import React from 'react';
import './PlatformData.css';

const PlatformData = (props) => {
    const {name,img}=props.platform;
    return (

        <div>
        <div className="details">
            <div className="details-img">
                <img style={{width:"300px", height:"200px"}} src={img} alt="" />
            </div>

            <div>
            <h4>{name}</h4>
            <button className="btn-list">read article </button>
            </div>
            
        </div>
        
        </div>
        
        
    );
};

export default PlatformData;