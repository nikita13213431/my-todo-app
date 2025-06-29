import React, { useState, useEffect } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POSTS_PER_PAGE = 10;

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const loadPosts = async (pageToLoad: number) => {
    setLoading(true);
    setError(null);
    try {
      
      if (posts.length === 0) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Ошибка загрузки: ${response.status}");
        }
        const data: Post[] = await response.json();
        setPosts(data);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Неизвестная ошибка");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(1);
  }, []);

 
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const displayedPosts = filteredPosts.slice(0, page * POSTS_PER_PAGE);


  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Список постов</h2>
      <input
        type="text"
        placeholder="Поиск по заголовку..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1); 
        }}
        style={{ marginBottom: 10, padding: "5px", width: "100%" }}
      />
      {error && (
        <div style={{ color: "red", marginBottom: 10 }}>
          Ошибка: {error}
        </div>
      )}
      {loading && <div>Загрузка...</div>}
      {!loading && displayedPosts.length === 0 && (
        <div>Посты не найдены.</div>
      )}
      <ul>
        {displayedPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* Кнопка "Загрузить ещё" показывается если есть ещё посты */}
      {!loading && displayedPosts.length < filteredPosts.length && (
        <button onClick={handleLoadMore}>Загрузить ещё</button>
      )}
    </div>
  );
};


