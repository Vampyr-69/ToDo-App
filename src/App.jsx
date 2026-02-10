import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "../public/Input";
import { ToDoItem } from "./components/ToDoItem";

function App() {
  const [input, setInput] = useState();
  const [toDoItems, setToDoItems] = useState([]);

  function handleInput(event) {
    const { value } = event.target;
    setInput(value);
  }

  function addToDo(event) {
    if (input.length > 0) {
      setToDoItems((prevItems) => [...prevItems, input]);
      setInput("");
    }

    event.preventDefault();
  }

  function deleteToDo(id) {
    setToDoItems((prevItems) => {
      return prevItems.filter((item, index) => index != id);
    });
  }
  return (
    <>
      <Header />
      <Input handleInput={handleInput} addToDo={addToDo} input={input} />
      {toDoItems.map((item, index) => {
        return (
          <ToDoItem
            key={crypto.randomUUID()}
            id={index}
            deleteToDo={deleteToDo}
            toDoItem={item}
          />
        );
      })}
    </>
  );
}

export default App;
