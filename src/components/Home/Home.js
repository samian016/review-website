import React, { useEffect, useState } from 'react';
import './Home.css';
import HomeData from '../FakeData/HomeData.json';
import Homes from '../Homes/Homes'

const Home = () => {
    const [homes,setHomes] = useState([]);
    useEffect(() => {
        setHomes(HomeData)
    },[homes])
    return (
        <div>
            <div className="container">
               {
                    homes.map(home => <Homes key={home.key}
                        home={home}></Homes>
                        
                        )
               }
            </div>
        </div>
    );
};

export default Home;
