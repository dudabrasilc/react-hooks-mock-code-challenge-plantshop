import React, {useState} from "react";

function Search({plantsList, setPlantsList}) {
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
    console.log(e.target.value)
    const filterSearch = plantsList.filter(plant => {
      if (search === plant.name) {
        console.log(search)
        return true
      }
    })
    // console.log(filterSearch)
    setPlantsList(filterSearch)
  }
  // console.log(plantsList)


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
