import React, { useState } from "react";

const Button = ({ handleClick, name }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Statistics = (props) => {
  const { goodSt, neutralSt, badSt, avgSt, posSt } = props.stats;
  console.log("props,", props.stats);
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tr>
          <StatItem name={goodSt.name} feedbackCount={goodSt.count} />
        </tr>

        <tr>
          <StatItem name={neutralSt.name} feedbackCount={neutralSt.count} />
        </tr>
        <tr>
          {" "}
          <StatItem name={badSt.name} feedbackCount={badSt.count} />
        </tr>
        <tr>
          {" "}
          <StatItem name={avgSt.name} feedbackCount={avgSt.count} />
        </tr>
        <tr>
          {" "}
          <StatItem name={posSt.name} feedbackCount={posSt.count} />
        </tr>
      </table>
    </div>
  );
};

const StatItem = (props) => {
  const { name, feedbackCount } = props;
  console.log("BOBOS", props);
  return (
    <React.Fragment>
      <td>{name}</td>
      <td>{feedbackCount}</td>
    </React.Fragment>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const avg = (good + neutral + bad) / 3;

  const pos = good / (good + neutral + bad);

  const handleSetGoodClick = () => setGood(good + 1);

  const stats = {
    goodSt: {
      name: "good",
      count: good,
    },
    badSt: {
      name: "bad",
      count: bad,
    },
    neutralSt: {
      name: "neutral",
      count: neutral,
    },
    avgSt: {
      name: "avg",
      count: avg,
    },
    posSt: {
      name: "pos",
      count: pos,
    },
  };

  const handleSetNeutralClick = React.useCallback(() => {
    setNeutral(neutral + 1);
  }, [neutral]);

  const handleSetBadClick = () => setBad(bad + 1);
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleSetGoodClick} name="good" />
        <Button handleClick={handleSetNeutralClick} name="neutral" />
        <Button handleClick={handleSetBadClick} name="bad" />
      </div>

      <Statistics stats={stats} />
    </div>
  );
};

export default App;
