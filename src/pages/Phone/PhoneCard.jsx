import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function PhoneCard({ phone }) {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};

  const handleAddToFavourite = () => {
    const addedFavouritePhone = [];
    const favouritePhone = JSON.parse(localStorage.getItem("favourites"));
    if (!favouritePhone) {
      addedFavouritePhone.push(phone);
      localStorage.setItem("favourites", JSON.stringify(addedFavouritePhone));
      alert("Product Added");
    } else {
      const isExist = favouritePhone.find((phone) => phone.id === id);
      if (!isExist) {
        addedFavouritePhone.push(...favouritePhone, phone);
        localStorage.setItem("favourites", JSON.stringify(addedFavouritePhone));
        alert("Products Added");
      } else {
        alert("Already Added");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Card className="w-11/12 md:w-full max-w-[48rem] md:flex-row ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {brand_name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {phone_name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
          <div className="inline-block">
            <Button
              onClick={handleAddToFavourite}
              variant="text"
              className="flex items-center gap-2 text-pink-500 font-bold text-lg"
            >
              add to favourite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
