import React, {useState} from "react";


function PlantCard({name, image, price}) {
  const [inStock, setInStock] = useState(true)

  const handleStock = () => {
    setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        <button className={inStock ? "primary" : ""} onClick={handleStock}>{inStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
