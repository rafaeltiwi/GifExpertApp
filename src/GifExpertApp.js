import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifsGrid } from "./components/GifsGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Fast"
  ]);

  

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} categories={categories} />
      
      <hr />

      {categories.map((category) => {
        return <GifsGrid key={category} categories={category} />;
      })}
    </div>
  );
};
