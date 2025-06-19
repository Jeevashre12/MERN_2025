import React from 'react';

const Child = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Dept: {props.Dept}</h1>
    </div>
  );
};

export default Child;
