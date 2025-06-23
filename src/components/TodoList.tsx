import React, { useState, useEffect } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue.trim(), completed: false }]);
      setInputValue("");
    }
  };

  const toggleCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Список дел</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addTodo}>Добавить</button>
      <ul style={{ paddingLeft: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              listStyle: "none",
              marginBottom: 8,
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
              userSelect: "none", 
            }}
            // Клик — задача выполнена
            onClick={() => toggleCompleted(index)}
            // Двойной клик — удаление задачи
            onDoubleClick={() => deleteTodo(index)}
            title="Клик — отметить выполненной, двойной клик — удалить"
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
