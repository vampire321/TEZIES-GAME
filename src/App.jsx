import Die from "/Die.jsx"
function generateAllNewDice(){
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
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
}
console.log(generateAllNewDice())
export default function App() {
  return (
    <main>
    <div className="dice-container">
      <Die value={1}/>
      <Die value={2}/>
      <Die value={3}/>
      <Die value={4}/>
      <Die value={5}/>
      <Die value={6}/>
      <Die value={7}/>
      <Die value={8}/>
      <Die value={9}/>
      <Die value={10}/>
    </div>
  </main>
  )
}