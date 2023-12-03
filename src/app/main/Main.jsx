"use client"
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
//DataBase
import products from "../db/data";
import Card from "../components/Card";
 function Main() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  
  // input fliter

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filtereditems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLowerCase())!== -1
  );

  // Radio filter

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Buttos Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filting input items

    if (query) {
      filteredProducts = filtereditems;
    }

    //Selected filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}
export default Main;
