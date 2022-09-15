import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
    console.log("name input: ", e.target.value)
  }

  const handleImage = (e) => {
    setImage(e.target.value)
    console.log("image input:", e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
    console.log("price input: ", e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setImage("")
    setName("")
    setPrice("")
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      })
    })
    .then(resp => resp.json())
    .then(addedPlant => {
      // console.log(addedPlant)
      addNewPlant(addedPlant)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleName}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
