import React from "react";
import { TodoList } from "../components/TodoList"; 
import { PostsList } from "../components/PostList"; 

export default function HomePage() {
  return (
    <main>
      <h1>Моё приложение TODO</h1>
      <h2>Задание 2 PostList</h2>
      <TodoList />
    </main>
  );
}
