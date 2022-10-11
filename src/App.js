import React from "react";
import { useState } from 'react'
import "./App.css";

function App () {
  const [currentScore, setCurrentScore] = useState(0);
  const [buttonScore, setButtonScore] = useState(1);
  
  const playAgain = () => {
    setCurrentScore(0);
    setButtonScore(1);
  }

  const addOne = () => {    
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
  if (currentScore >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={playAgain}>Play again?</button>
      </div>
    );
  }
  return (
    <div>
      <main>
        <div>
          <h1>Current Score: {currentScore}</h1>
        </div>
        <div>
          <button onClick={addOne}>+{buttonScore}</button>
        </div>

        <div>
          <button onClick={changeButtonIncrement}>
            {`Pay 10 points to change from +${buttonScore} to +${buttonScore + 1}`}
          </button>
        </div>
      </main>
    </div>
  );
}















//   if (currentScore >= 100) {
//     return (
//       <div>
//             <h2>{'You Win!'}</h2>
//             <br></br><br></br>
//             <button onClick={playAgain}>{'Play again?'}</button>
//         </div>
      
//         )
//   }
//  return (
//   <div>
//     <main>
//       <div>
//         <h1>{`Current Score: ${currentScore}`}</h1>
//       </div>
//       <div>
//         <button onClick={addOne}>{`+${buttonScore}`}</button>
//       </div>
//       <div>
//       <button onClick={changeButtonIncrement}>{`Pay 10 points to change from +${buttonScore} to +${buttonScore + 1} `}  </button>
//       </div>
//     </main>
// )
// </div>

// }

export default App;
