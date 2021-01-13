import React, { useState } from "react";
import { randomNumber } from "../utils";

function NumberList() {
  const [numbers, setNumbers] = useState([0, 3, 5, 10]);
  const [filterBy, setFilterBy] = useState("ALL");
  
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  
  let numbersToDisplay = numbers;
  if (filterBy === "Even") {
  numbersToDisplay = numbers.filter((num) => num % 2 === 0);
  }
  else if (filterBy === "Odd") {
  numbersToDisplay = numbers.filter((num) => num % 2 !== 0);
  }

  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...numbers, newNumber];
    setNumbers(newNumberArray);
  }

  function handleLiClick(numberToUpdate) {
    const newNumberArray = numbers.map((number) =>
      number === numberToUpdate ? numberToUpdate + 100 : number
    );
    setNumbers(newNumberArray);
  }

  const numberList = numbersToDisplay.map((num) => (
    <li key={num} onClick={() => handleLiClick(num)}>
      {num}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Even">Even</option>
        <option value="Odd">Odd</option>
      </select>; 
    </div>
  );
}

export default NumberList;
