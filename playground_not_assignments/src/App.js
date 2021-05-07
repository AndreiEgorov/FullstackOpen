import React, { useState } from "react";

const Display = (props) => {
  console.log("Display");
  return <div>{props.counter}</div>;
};

const Test = () => {
  console.log("test");
  return <div>i am test</div>;
};

const Button = ({ handler, name }) => {
  console.log("Display", name);

  return <button onClick={handler}> {name}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Test />
      <Button handler={increaseByOne} name="plus" />
      <Button handler={setToZero} name="zero" />
    </div>
  );
};

export default App;
