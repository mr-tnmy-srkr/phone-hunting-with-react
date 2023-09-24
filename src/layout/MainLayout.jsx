import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";
import Footer from "../components/Footer/Footer"
import { useEffect } from "react";


const MainLayout = () => {

const loc = useLocation();
useEffect(()=>{
    // console.log(loc);
    if(loc.pathname==='/'){
        document.title = 'Phone - home'
    }else{
        document.title = `Phone ${loc.pathname.replace('/','- ')}`
    }
if(loc.state){
    document.title=`${loc.state}`
}   

},[loc.pathname, loc.state])

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