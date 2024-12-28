import { useState } from "react";

function Addtodo({ onNewitem }) {
  const [todoName, settodoName] = useState("");
  const [duedate, setduedate] = useState("");

  const handlenamechange = (event) => {
    settodoName(event.target.value);
  };

  const handledatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleAddbuttonClicked = () => {
    onNewitem(todoName, duedate);
    setduedate("");
    settodoName("");
  };

  return (
    <div class="container">
      <div class="row row1 ">
        <div class="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            value={todoName}
            onChange={handlenamechange}
          />
        </div>
        <div class="col-4">
          <input
            type="date"
            value={duedate}
            onChange={handledatechange}
          ></input>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success button1"
            onClick={handleAddbuttonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
