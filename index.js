import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

const domElement = document.getElementById("root");
ReactDOM.render(<Counter />, domElement);
