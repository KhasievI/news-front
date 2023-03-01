import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../features/categoriesSlice";

const SideBar = () => {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      {categories.map((category) => {
        return (
          <div>
            <Link to={`/category/${category._id}`}>
              {category.nameCategory}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
