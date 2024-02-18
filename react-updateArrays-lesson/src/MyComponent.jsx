import React, { useState } from 'react'

function MyComponent() {

  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = "";
    if (newFood !== "") {
      setFoods(f => [...foods, newFood])
    }
  }

  function handleRemoveFood(index) {
    
    setFoods(foods.filter((_, i) => i !== index)) //underscored is used to indicate that the parameter passed is ignored
    /*    The .filter() method is called on the foods array. It creates a new array containing only the elements that pass a test specified by the provided callback function.

    In this case, the callback function (food, i) => i !== index is provided. It takes two arguments: food (the current element being processed in the array) and i (the index of the current element).

    For each element in the foods array, the callback function checks if the index i is not equal to the index passed to handleRemoveFood. If the condition is true, the element is kept in the filtered array; otherwise, it's excluded.

    The filtered array is then passed to setFoods, updating the state of foods in the component's state.*/ 
  }

  return(
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) =>  /*    The .map() method is called on the foods array. It iterates over each element of the array and returns a new array with modified elements. In this case, it iterates over each food item in the foods array.

For each food item, it generates a list item (<li>) element in JSX.

The key prop is provided to each <li> element to help React identify which items have changed, are added, or are removed. The index is used as the key, which should be unique within the list.

Inside each list item, the {food} expression renders the name of the food item.

The onClick event handler is attached to each list item. When a list item is clicked, it calls the handleRemoveFood function with the index of the clicked item as an argument.*/ 
        <li key={index} onClick={() => handleRemoveFood(index)}>
          {food}</li>)}
      </ul>
      <input type="text" id='foodInput' placeholder='Enter food name' />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent