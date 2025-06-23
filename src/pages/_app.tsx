import React from "react";
import { TodoList } from "../components/TodoList";
import { PostsList } from "../components/PostList"; // Импортируем PostsList

export default function HomePage() {
  return (
    <main>
      <h1>Моё приявление TODO</h1>
      <h2>Задание 2 PostList</h2>
      
      {/* Секция для TodoList */}
      <section>
        <h3>Список задач</h3>
        <TodoList />
      </section>

      {/* Секция для PostsList */}
      <section>
        <h3>Список постов</h3>
        <PostsList />
      </section>
    </main>
  );
}
