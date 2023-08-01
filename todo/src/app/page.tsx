"use client";
import TodoObject from "@/models/todo";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    setTodos([{ id: uuid(), value: todo, done: false }, ...todos]);
    setTodo("");
  };
  const markDone = (id) => {
    console.log(id, "markdone");
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos[0].done);
  };
  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodo);
  };
  return (
    <main className=" h-screen w-full flex items-center justify-center  bg-[#0052FF]">
      <div className=" flex flex-col	 items-center pt-10 px-5  h-96 w-2/4 shadow-2xl bg-[#91B2F9] rounded-xl	">
        <h1 className="text-5xl font-semibold	">Hi! I’m To Do List</h1>
        <div className="flex bg-white w-2/3">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            className="bg-green-300 h-10 w-10/12 p-3"
          />
          <button onClick={addTodo} className="bg-blue-300 h-10 w-20 p-2">
            Add{" "}
          </button>
        </div>
        <div className="h-96 mt-9">
          {todos.map((todo) => (
            <div key={todo.id} className="flex">
              <ul className="list-none w-1/3 mr-10">
                <li
                  onClick={() => markDone(todo.id)}
                  key={todo.id}
                  className={`${
                    todo.done ? "line-through	" : "no-underline"
                  } "list-none"`}
                >
                  {todo.value}
                </li>
              </ul>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="h-10 w-20 m-1 bg-[#0052FF] justify-self-end"
              >
                trash
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
