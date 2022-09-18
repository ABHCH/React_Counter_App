import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    setCounter(counter + 1);
  };

  const resetCnt = () => {
    setCounter(0);
  };

  const decCnt = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter flex justify-center items-center h-[100vh] text-center">
      <div className="main">
        <div className="count text-6xl">{counter}</div>
        <div className="button-container mt-6">
          <button
            onClick={() => decCnt()}
            className="bg-red-600 p-3 mr-3 font-bold text-white w-[8rem] cursor-pointer hover:shadow-lg shadow-blue-500/50 ease-in-out duration-300"
          >
            Decrease
          </button>
          <button
            onClick={() => resetCnt()}
            className="bg-red-600 p-3 mr-3 font-bold text-white w-[8rem] cursor-pointer hover:shadow-lg shadow-blue-500/50 ease-in-out duration-300"
          >
            Reset
          </button>
          <button
            onClick={() => incCounter()}
            className="bg-green-500 p-3 font-bold text-white w-[8rem] cursor-pointer hover:shadow-lg shadow-blue-500/50 ease-in-out duration-300"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
