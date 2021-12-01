import React from 'react';
import './Teachers.css';

const Teachers = (props) => {
    const {type,name,img} = props.teacher;
    return (
        <div>
            <div className="detailss">
            <div className="teacher-img">
            <img src={img} alt="" />
            </div>
            <h4>{type}</h4>
            <h5>{name}</h5>
            <button className="btn-listt">Contact</button>
            </div>
        </div>
    );
};

export default Teachers;