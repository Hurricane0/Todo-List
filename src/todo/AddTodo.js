import React, { useState } from "react";

let AddTodo = ({ addTodo }) => {
  let [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form
      className={"form"}
      style={{ marginBottom: "8px" }}
      onSubmit={handleSubmit}
    >
      <button className="addTodoButton" type="submit">
        &#x0002B;
      </button>
      <input
        className="addTodoInput"
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default AddTodo;
