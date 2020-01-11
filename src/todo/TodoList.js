import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

const TodoList = ({ todos, toggleCompleted }) => {
  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            toggleCompleted={toggleCompleted}
            todo={todo}
            index={index}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
