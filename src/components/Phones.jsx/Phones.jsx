import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {
    return (
        <div className="my-10">
            <h1 className="text-center my-5 text-2xl font-semibold">Our Phones Collections</h1>
            <div className="grid md:grid-cols-2 gap-10 place-items-center lg:grid-cols-3 mb-5">
                {
                    phones?.map(phone=><PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Phones;