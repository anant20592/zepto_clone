import React, { useEffect } from "react";
import category_icon from "../../assets/images/category.webp";
import { NavLink } from "react-router-dom";

interface CategoryCardProps {
  category?: any;
  shimmer?: boolean;
}
const CategoryCard = ({ category, shimmer = false }: CategoryCardProps) => {
  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <>
      {shimmer ? (
        <div className="category-card shimmer-card animate"></div>
      ) : (
        <NavLink to={`/${category.url}`}>
          <div className="category-card">
            <img src={category.img} width={120} />
          </div>
        </NavLink>
      )}
    </>
  );
};

export default CategoryCard;
