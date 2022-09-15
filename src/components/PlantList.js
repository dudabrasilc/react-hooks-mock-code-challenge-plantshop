import React, {useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList, setPlantsList}) {
  // console.log("in plantlist.js: ", plantsList)

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setPlantsList(data)
    })
  }, [])

  const listOfPlants = plantsList.map(plant => {
    return (
      <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
    )
  }) 

  return (
    <ul className="cards">
      {listOfPlants}
    </ul>
  );
}

export default PlantList;
