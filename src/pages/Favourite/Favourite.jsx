import { useEffect, useState } from "react";
// import { PhoneCard } from "../Phone/PhoneCard";
import PhonesCard from "../../components/Phones.jsx/PhonesCard";

const Favourite = () => {
  const [favourites, setFavourites] = useState();
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const favouritePhone = JSON.parse(localStorage.getItem("favourites"));
    if (favouritePhone) {
      setFavourites(favouritePhone);
    } else {
      setNoFound("No Data Found");
    }
  }, []);


  const handleRemoveAll = () => {
    localStorage.clear();
    setFavourites([]);
    setNoFound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <div className="text-2xl flex items-center justify-center h-[80vh]">
          {noFound}
        </div>
      ) : (
        <div>
          {favourites && (
            <div onClick={handleRemoveAll} className="text-center my-10">
              <button className="bg-green-500 p-5 text-lg font-bold text-white">
                Delete All Favourite
              </button>
            </div>
          )}
          <div className="grid md:grid-cols-2 w-[50vw] mx-auto my-10">
            {isShow
              ? favourites?.map((phone) => (
                  <PhonesCard key={phone.id} phone={phone}></PhonesCard>
                ))
              : favourites
                  ?.slice(0, 2)
                  .map((phone) => (
                    <PhonesCard key={phone.id} phone={phone}></PhonesCard>
                  ))}
          </div>
          {
           
            <div onClick={() => setIsShow(!isShow)} className="text-center my-10">
            <button className={`bg-green-500 p-3 text-lg font-bold `}>
              {isShow ? "Show Less" : "Show More"}
            </button>
          </div>
          }
        </div>
      )}
    </div>
  );
};

export default Favourite;
