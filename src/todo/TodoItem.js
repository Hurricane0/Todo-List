import React, { useContext } from "react";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem"
  },
  checkbox: {
    marginRight: "1rem"
  },
  delete: {
    borderRadius: "50%",
    background: "#ff5c5c",
    border: "none",
    color: "#fff",
    paddingBottom: "3px",
    cursor: "pointer",
    outline: "none",
    userSelect: "none"
  }
};

let TodoItem = ({ todo, index, toggleCompleted }) => {
  const classes = [];
  const { removeTodo } = useContext(Context);

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li} className="liDark">
      <span className={classes.join(" ")}>
        <input
          checked={todo.completed}
          style={styles.checkbox}
          type="checkbox"
          onChange={() => toggleCompleted(todo.id)}
          className="inputDark"
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} style={styles.delete}>
        &#x02717;
      </button>
    </li>
  );
};

export default TodoItem;
