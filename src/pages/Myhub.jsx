import React,{useEffect} from 'react';
import PublicHome from '../components/publichome/PublicHome';
import Hub from '../components/thehub/Hub';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
const Myhub = () => {
    const navigate = useNavigate();

    const callAboutPage = async () => {
        try {
          const response = await fetch("/about", {
            mode: 'no-cors',
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          const data = response;
          // const data1 = await response.json();
        //   setUserData(data1);
        //   setId(data1._id);
        //   // const a = await userData.json();
        //   setName(data1.name);
        //   setEmail(data1.email);
        //   setPhone(data1.phone);
        if(data.status===200){
            
        }
    
          if (data.status !== 200) {
            const error = new Error(response.error);
            throw error;
          }
        } catch (err) {
          navigate("/login");
          console.log(err);
        }
      };

      useEffect(() => {
      callAboutPage();
      }, []);

    return (
        <>
          <Navbar/>
          <div className="main">

            <PublicHome/>
          </div>
            <Hub/>
        </>
    );
}

export default Myhub;
