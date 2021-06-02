import React, { useState } from "react";
let counter = 0;
function App() {
  const [state, setState] = useState("");
  const [disabled, setDisabled] = useState(false);

  const clickHandle = (e) => {
    setState(state + e.target.value);
  };

  const enter = () => {
    if (state.length !== 4) {
      alert("enter four numbers");
    } else {
      if (state === "") {
        alert("Field is empty");
      } else {
        if (state === "1234") {
          document.querySelector(".input-pin").setAttribute("type", "text");
          setState("OK");
          setDisabled(true);
        } else {
          document.querySelector(".input-pin").setAttribute("type", "text");
          setState("ERROR");
          setDisabled(true);
          counter = counter + 1;

          if (counter === 3) {
            setState("LOCKED");
            setDisabled(true);
            document
              .querySelector(".clear")
              .setAttribute("disabled", "{disabled}");
            setTimeout(() => {
              document.querySelector(".clear").removeAttribute("disabled");
              counter = 0;
            }, 30000);
          }
        }
      }
    }
  };

  const clear = () => {
    document.querySelector(".input-pin").setAttribute("type", "password");
    setState("");
    setDisabled(false);
  };

  return (
    <div className='container'>
      <input
        value={state}
        className='input-pin'
        type='password'
        disabled={disabled}
      ></input>
      <div className='grid-container'>
        <button
          value='1'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          1
        </button>
        <button
          value='2'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          2
        </button>
        <button
          value='3'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          3
        </button>
        <button
          value='4'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          4
        </button>
        <button
          value='5'
          onClick={clickHandle}
          className='grid-item '
          disabled={disabled}
        >
          5
        </button>
        <button
          value='6'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          6
        </button>
        <button
          value='7'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          7
        </button>
        <button
          value='8'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          8
        </button>
        <button
          value='9'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          9
        </button>
        <button value='clear' onClick={clear} className='grid-item clear'>
          clear
        </button>
        <button
          value='0'
          onClick={clickHandle}
          className='grid-item'
          disabled={disabled}
        >
          0
        </button>
        <button
          value='enter'
          onClick={enter}
          className='grid-item'
          disabled={disabled}
        >
          enter
        </button>
      </div>
    </div>
  );
}

export default App;
