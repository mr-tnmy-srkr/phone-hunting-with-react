// import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Phones from "../../components/Phones.jsx/Phones";

const Home = () => {
    // const phones = useLoaderData() || {}
    // console.log(phones);
    return (
        <div>
           <Banner></Banner>
            {/* <Phones phones={phones}></Phones> */}
            <Phones></Phones>
        </div>
    );
};

export default Home;