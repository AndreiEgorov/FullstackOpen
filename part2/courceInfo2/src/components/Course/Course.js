import React from "react";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { Total } from "./Total/Total";

const Course = (props) => {
  const { name, parts } = props.course;

  const total = parts.reduce((n, p) => {
    return n + p.exercises;
  }, 0);

  return (
    <div>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export { Course };
