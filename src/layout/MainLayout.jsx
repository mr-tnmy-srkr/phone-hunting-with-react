import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";
import Footer from "../components/Footer/Footer"


const MainLayout = () => {
    return (
        <div className="container mx-auto">
         <NavBar></NavBar>
        <div className="min-h-[70vh]">
        <Outlet></Outlet>
        </div>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;