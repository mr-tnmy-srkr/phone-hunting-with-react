import React from "react";
import { Input, Button } from "@material-tailwind/react";

const Banner = () => {
  const [text, setText] = React.useState("");
  const onChange = ({ target }) => setText(target.value);

  return (
    <div className="bg-deep-purple-50 min-h-[500px]">
      <div className=" flex justify-center items-center h-[80vh]  max-w-[50rem] mx-auto">
        <Input
          type="text"
          label="Search by Category ..."
          value={text}
          onChange={onChange}
          className=" "
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={text ? "gray" : "blue-gray"}
          disabled={!text}
          className=" rounded px-6 py-3"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
