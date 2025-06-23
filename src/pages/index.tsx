import React from "react";
import { TodoList } from "../components/TodoList"; // путь поправьте под ваш проект
import { PostsList } from "../components/PostList"; // путь поправьте под ваш проект

export default function HomePage() {
  return (
    <main>
      <h1>Моё приложение TODO</h1>
      <h2>Задание 2 PostList</h2>
      <TodoList />
    </main>
  );
}
