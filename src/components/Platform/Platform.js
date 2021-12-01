import React, { useEffect, useState } from 'react';
import './platform.css';
import fakeData from '../FakeData/fakeData.json';
import PlatformData from '../PlatformData/PlatformData';



const Platform = () => {
    const [platform,setPlatform] = useState([]);
    useEffect( () =>{
        setPlatform(fakeData)
    },[platform])
    return (
        <div className="container">
            {
                platform.map(platform => <PlatformData key={platform.key}
                    platform={platform}></PlatformData>)
            }
            
            
        </div>
    );
};

export default Platform;
