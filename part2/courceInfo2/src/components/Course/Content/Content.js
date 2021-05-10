import React from "react";
const Part = (props) => {
  const { part } = props;

  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

const Content = (props) => {
  const { parts } = props;

  return (
    <div>
      <ul>
        {parts.map((p) => (
          <Part key={p.id} part={p} />
        ))}
      </ul>
    </div>
  );
};

export { Content };
