import React from "react";
import { useState } from 'react'
import "./App.css";

function App () {
  const [currentScore, setCurrentScore] = useState(0);
  const [buttonScore, setButtonScore] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const playAgain = () => {
    setIsGameOver(false);
    setCurrentScore(0);
    setButtonScore(1);
  }
  const addOne = () => {
    if(currentScore + buttonScore >= 100) {
      setIsGameOver(true);
    }       
    setCurrentScore(currentScore + buttonScore);

  }

  const changeButtonIncrement = () => {
    if (currentScore < 10) {
      alert(`You can't afford that!`);
    } else {
      setButtonScore(buttonScore + 1);
      setCurrentScore(currentScore - 10)
    }

  }
  
return (
<>
      <h2>{'Current Score: ' + currentScore}</h2>

      {isGameOver ? (
      <>
      <h2>{'You Win!'}</h2>
      <br></br><br></br>
      <button onClick={playAgain}>{'Play again?'}</button>
      </>

  ) : (
    <>
      <button onClick={addOne}>{`+${buttonScore}`}</button>
      <br></br><br></br>
      <button onClick={changeButtonIncrement}>{`Pay 10 points to change from +${buttonScore} to +${buttonScore + 1} `}  </button>
    </>)} 
</>)
}

export default App;
