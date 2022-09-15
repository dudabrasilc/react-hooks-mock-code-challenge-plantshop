import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])

  const addNewPlant = (plant) => {
    console.log("added plant in plant page: ", plant)
    const newListOfPlants = [...plantsList, plant]
    setPlantsList(newListOfPlants)
  }
  
  
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search plantsList={plantsList} setPlantsList={setPlantsList}/>
      <PlantList plantsList={plantsList} setPlantsList={setPlantsList}/>
    </main>
  );
}

export default PlantPage;
