import React from 'react';
import "./home.css";
import PublicHome from '../components/publichome/PublicHome';
import Navbar from '../components/navbar/Navbar';

// import Error from './error/Error';
// import Footer from '../components/footer/Footer';

const Home = () => {

 
    return (
        <>
            <Navbar/>
            <div className="main">
              
             <PublicHome/>
            </div>
         
        </>
    );
}

export default Home;
