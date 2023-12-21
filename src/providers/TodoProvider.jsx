import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const handleTodoFetch = async () => {
      fetch("http://localhost:3001/todos", {
        method: "GET",
      }).then(async (result) => setTodos(await result.json()));
    };

    handleTodoFetch();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);

export { TodoProvider, useTodos };
