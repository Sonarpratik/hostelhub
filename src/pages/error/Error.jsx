
import Navbar from "../../components/navbar/Navbar";
import errors from "../img/under123.webp";
import "./error.css"
const Error = () => {
//     const data=useRef();
//     const haC=()=>{
//         console.log(data.current.value," initial");
//         localStorage.setItem("inputvalue",data.current.value);
//         vcall();
//     }
//     const vcall =async () => {
//         console.log("inside error",localStorage.getItem("inputvalue"))
        
//       };
   
//     useEffect(() => {
//    vcall();
//     }, []);
    return (
        <>
        <Navbar/>
        <div className='error-con'>
        
            <img src={errors} width="500px" alt="" />
            <h1> <span className='purple-color'>
                  404....!!! </span> Page Not Found</h1>
        </div>
        </>
    );
}

export default Error;
