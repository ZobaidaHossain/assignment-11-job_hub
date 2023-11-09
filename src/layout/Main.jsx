import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
        </div>
        

    );
};

export default Main;