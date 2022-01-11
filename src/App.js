import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die.js";
import "./App.css";

function App() {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      });
    }
    return newDice;
  };

  const holdDice = (id) => {
    setDice(oldDice=>{
      return oldDice.map((newDice) => {
        return newDice.id === id ? {...newDice,isHeld: !newDice.isHeld} : newDice;
      });
    })
  };
  // const holdDice = (id) => {
  //   setDice((oldDice) => {
  //     const newDice = [];
  //     for (let i = 0; i < oldDice.length; i++) {
  //       const currentDie = oldDice[i];
  //       if (currentDie.id === id) {
  //         const updatedDie = {
  //           ...currentDie,
  //           isHeld: !currentDie.isHeld,
  //         };
  //         newDice.push(updatedDie);
  //       } else {
  //         newDice.push(currentDie);
  //       }
  //     }
  //     return newDice;
  //   });
  // };

  const [dice, setDice] = useState(allNewDice);
  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      id={die.id}
      key={die.id}
      toggle={holdDice}
      isHeld={die.isHeld}
    />
  ));

  const rollDice = () => {
    setDice(allNewDice());
  };
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
