import React from "react";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { TodoProvider } from "../providers/TodoProvider";

const Home = () => {
  return (
    <section>
      <Navbar />
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </section>
  );
};

export default Home;
