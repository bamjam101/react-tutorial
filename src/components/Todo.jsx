import React, { useRef } from "react";

import { Check, Plus, Trash } from "lucide-react";
import { useTodos } from "../providers/TodoProvider";
import Header from "./Header";

const Todo = () => {
  const todoInputRef = useRef(null);

  const { todos, setTodos } = useTodos();

  const handleTodoUpload = async (todo) => {
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 1000),
          text: todo,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload todos");
      }

      setTodos((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 1000),
          text: todo,
        },
      ]);

      todoInputRef.current.value = "";

      return response.json();
    } catch (error) {
      console.error("Error uploading todos:", error.message);
      throw error; // Rethrow the error to propagate it further
    }
  };

  const handleTodoDeletion = async (id) => {
    if (!id) return;

    const response = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) console.log("some error");
    setTodos((prev) => prev.filter((existingTodo) => existingTodo.id !== id));
  };
  return (
    <main className="bg-brand-black text-brand-white h-[85svh] px-6">
      <Header />

      <main className="relative pt-3">
        <ul className="space-y-2 py-3">
          {todos?.map((todo) => (
            <li
              key={todo.id}
              className="bg-brand-white/5 hover:bg-brand-white/10 flex min-h-[48px] w-full items-center justify-between rounded-lg px-3 py-1"
            >
              <p className="flex items-center gap-x-6">
                <span
                  className={`${
                    todo.checked
                      ? "border-brand-white/50"
                      : "border-brand-white"
                  } flex h-3 w-3 items-center justify-center rounded-full border bg-transparent`}
                >
                  {todo.checked && <Check className="h-2 w-2" />}
                </span>
                <span
                  className={`flex flex-col gap-y-0.5 ${
                    todo.checked && "text-brand-white/50 line-through"
                  }`}
                >
                  {todo.text}
                  {!todo.checked && (
                    <small className="text-brand-white/50 italic">
                      6:00 AM
                    </small>
                  )}
                </span>
              </p>
              <Trash
                className="text-rose-600"
                onClick={() => handleTodoDeletion(todo.id)}
              />
            </li>
          ))}
        </ul>
      </main>
      <footer className="absolute bottom-12 left-0 flex w-full gap-x-3 px-6">
        <input
          className="text-brand-white bg-brand-black border-brand-white flex-1 rounded-full border px-2 py-0.5 italic"
          type="text"
          ref={todoInputRef}
        />
        <button
          type="button"
          onClick={() => handleTodoUpload(todoInputRef?.current.value)}
          className="bg-brand-blue/80 flex items-center justify-end rounded-full p-4"
        >
          <Plus className="text-brand-black h-6 w-6" />
        </button>
      </footer>
    </main>
  );
};

export default Todo;
