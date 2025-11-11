import {useState} from "react"
import Die from "/Die.jsx"
export default function App(){
  const[randValue,setrandValue]=useState(generateAllNewDice())
/*const randomNumber = Math.floor(Math.random() * 6)+1;
return randomNumber;*/
// Create a new array (empty)
        // Loop 10 times
            // Generate a random number between 1-6
            // Push that number to the array
        // return the array
  /*const newDice =[]
  for (let i=0;i<10;i++){
    const rand = Math.ceil(Math.random()*6)
    newDice.push(rand)
  }
  return newDice
      */
  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
}
function rollDice(){
  setrandValue(generateAllNewDice())
}
/** map over dice here */
const diceElements = randValue.map(num => <Die value={num} />)
  return (
    <main>
    <div className="dice-container">
      {diceElements}
    </div>
    <button className="roll-dice" onClick={rollDice}>Roll</button>

  </main>
  )
}



/*<Die value={1}/>
      <Die value={2}/>
      <Die value={3}/>
      <Die value={4}/>
      <Die value={5}/>
      <Die value={6}/>
      <Die value={7}/>
      <Die value={8}/>
      <Die value={9}/>
      <Die value={10}/>*/