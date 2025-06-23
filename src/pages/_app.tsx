import React from "react";
import { TodoList } from "../components/TodoList";
import { PostsList } from "../components/PostList"; 

export default function HomePage() {
  return (
    <main>
      <h1>.</h1>
      <h2>.</h2>
      
      {}
      <section>
        <h3>Список задач</h3>
        <TodoList />
      </section>

      {}
      <section>
        <h3>Список постов</h3>
        <PostsList />
      </section>
    </main>
  );
}
