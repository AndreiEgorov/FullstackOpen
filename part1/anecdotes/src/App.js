import React, { useState } from "react";

const Button = ({ handle, text }) => {
  return <button onClick={handle}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getNextAnecdote = () => {
    const min = 0;
    const max = anecdotes.length - 1;
    const nextId = Math.floor(Math.random() * (max - min + 1) + min);
    setSelected(nextId);
  };

  const addVote = () => {
    const newArr = [...votes];
    newArr[selected] = newArr[selected] + 1;
    setVotes(newArr);
  };
  
  const popular = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>

      <Button handle={getNextAnecdote} text="next" />
      <Button handle={addVote} text="vote" />

      <h1>Anecdote With most votes</h1>
      <p>{anecdotes[popular]}</p>

      <div>{votes}</div>
    </div>
  );
};

export default App;
