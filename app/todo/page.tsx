"use client";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodos, setNewTodos] = useState<string>("");

  const addTodos = () => {
    if (newTodos.trim()) {
      setTodos([...todos, newTodos]);
      setNewTodos("");
    }
  };
  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col justify-start items-start mt-10">
      <h1 className="text-3xl font-bold text-yellow-700 p-5">Todo List</h1>
      <input
        className="text-black p-2"
        type="text"
        value={newTodos}
        onChange={(e) => setNewTodos(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm hover:bg-black to-yellow-950 p-3"
        onClick={addTodos}
      >
        Add Todo
      </button>
      <ul className="p-2 mx-auto my-auto">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm hover:bg-black to-yellow-950 p-2"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
