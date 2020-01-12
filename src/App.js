import React, { useState, useEffect } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import Mode from "./Mode";
import Modal from "./Modal/Modal";
function App() {
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("todos");
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleCompleted = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = text => {
    setTodos(todos.concat([{ id: Date.now(), completed: false, text }]));
  };

  const toggleMode = () => {
    setMode(!mode);
  };

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={mode ? "light" : "dark"}>
        <div className="aboutAuthor">
          <span onClick={toggleModal} className="aboutAuthorButton">
            Project Card
          </span>
          <Mode toggleMode={toggleMode} mode={mode} modal={modal} />
        </div>

        <div className="wrapper">
          <h1>Todo List</h1>
          {modal && <Modal closeModal={closeModal} />}
          <AddTodo addTodo={addTodo} />
          {todos.length ? (
            <TodoList toggleCompleted={toggleCompleted} todos={todos} />
          ) : (
            <p
              className="addSomeTodosDark"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              Add some todos...
            </p>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
