import {useState} from "react"
import Die from "/Die.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App(){
  const[randValue,setrandValue]=useState(() =>generateAllNewDice())
  
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
     /*if(
      randValue.every(die => die.isHeld)&&
      randValue.every(die => die.value === randValue[0].value)
     ){
      console.log("You won!")
     } INSTEAD OF PUTTING THE ENTIRE WIN CONDITION INSIDE AN IF, WE STORE IT IN AN VARIABLE(GAMEWON)
      Reason 2: Used for changing UI
      Reason 3: React needs values to trigger re-renders*/
  const gameWon=
    randValue.every(die=> die.isHeld)&&
    randValue.every(die => die.value === randValue[0].value)
  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6), 
        isHeld:false,
        id: nanoid()
      }))
}
function rollDice(){
  if(!gameWon){
  setrandValue(oldDice => oldDice.map(die =>
    die.isHeld ? 
    die :
    {...die, value: Math.ceil(Math.random() * 6)}
  ))} else {
    setrandValue(generateAllNewDice())
  }
}
function hold(id){
  setrandValue(oldDice =>{
    return oldDice.map(die =>{
      return die.id===id ?
      {...die,isHeld:!die.isHeld} : die
    })
  })
}
/** map over dice here */
const diceElements = randValue.map(dieObj => (
<Die 
key={dieObj.id} 
value={dieObj.value} 
isHeld={dieObj.isHeld}
hold={() => hold(dieObj.id)}
/>

))
  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="dice-container">
      {diceElements}
    </div>
    <button className="roll-dice" onClick={rollDice }>{gameWon ? "New Game" : "Roll"}</button>

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