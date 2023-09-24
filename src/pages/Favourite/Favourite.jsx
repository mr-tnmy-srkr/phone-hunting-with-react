import { useEffect, useState } from "react";
// import { PhoneCard } from "../Phone/PhoneCard";
import PhonesCard from "../../components/Phones.jsx/PhonesCard";

const Favourite = () => {
  const [favourites, setFavourites] = useState();
  const [noFound, setNoFound] = useState("");
  useEffect(() => {
    const favouritePhone = JSON.parse(localStorage.getItem("favourites"));
    if (favouritePhone) {
      setFavourites(favouritePhone);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  // console.log(favourites);
  return (
    <div>
      {noFound ? (
        <div className="text-2xl flex items-center justify-center h-[80vh]">
          {noFound}
        </div>
      ) : (
       <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 ">
          {
            favourites?.map(phone=><PhonesCard key={phone.id} phone={phone}></PhonesCard>)
          }
        </div>
       </div>
      )}
    </div>
  );
};

export default Favourite;
