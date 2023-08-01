import React from "react";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between items-center overflow-x-auto cursor-pointer pt-4">
        {categories.map((item) => {
          return (
            <CategoryBox key={item.label} label={item.label} icon={item.icon} />
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
