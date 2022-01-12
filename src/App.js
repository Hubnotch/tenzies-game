import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import Die from "./Die.js";
import "./App.css";

function App() {
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  };

  const holdDice = (id) => {
    setDice((oldDice) => {
      return oldDice.map((newDice) => {
        return newDice.id === id
          ? { ...newDice, isHeld: !newDice.isHeld }
          : newDice;
      });
    });
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

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const heldDice = dice.every((die) => die.isHeld === true);
    const firstValue = dice[0].value;
    const allValues = dice.every((die) => die.value === firstValue);
    if (heldDice && allValues) {
      setTenzies(true);
      console.log("You won");
    }
  }, [dice]);

  const rollDice = () => {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice);
    }
  };
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
