import React, { useState } from "react";

// const Display = (props) => {
//   console.log("Display");
//   return <div>{props.counter}</div>;
// };

// const Test = () => {
//   console.log("test");
//   return <div>i am test</div>;
// };

// const Button = ({ handler, name }) => {
//   console.log("Display", name);

//   return <button onClick={handler}> {name}</button>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const setToZero = () => setCounter(0);
//   const mouseMove = (e) => {
//     console.log("EVENT", e)
//   }

//   return (
//     <div onMouseMove={(e)=>mouseMove(e)} style={{background: "orange"}}>
//       <Display counter={counter} />
//       <Test />
//       <Button handler={increaseByOne} name="plus" />
//       <Button handler={setToZero} name="zero" />
//     </div>
//   );
// };
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll([...allClicks, 'R'])
    setRight(right + 1)
  }

  const setToNumber = (num) => () => setLeft(num)
  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      <Button onClick={setToNumber(1000)} text='to 1000' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
