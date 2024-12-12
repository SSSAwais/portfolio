import React from "react";

const AbsHeading = (props) => {
  const { name } = props;
  return (
    <div>
      <h4 className="font-poppins text-[40px] font-bold text-[#f5c729] mb-[50px] text-center">
        My <span className="text-[#000] underline"> {name}</span>
      </h4>
    </div>
  );
};

export default AbsHeading;
