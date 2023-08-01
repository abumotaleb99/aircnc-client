import React from "react";

const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center text-neutral-500 hover:text-neutral-800 border-b-2 border-transparent gap-2 p-3">
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
