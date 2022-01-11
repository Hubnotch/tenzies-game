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
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  };
  // const newDice = allNewDice();
  // const newDiceRoll = newDice.map(diceRoll=>({value:diceRoll, isHeld:false}))
  // console.log(newDiceRoll)
  // const dies = newDiceRoll.map(di=>(di.isHeld))

  const [dice, setDice] = useState(allNewDice);
  const diceElements = dice.map((die) => <Die value={die.value} />);

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
