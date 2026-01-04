'use client';

import { useState } from "react";
import "./todolist.css";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;

    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="todo-container">
      <h1>📝 Todo List</h1>

      <div className="todo-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                />
                <button onClick={() => saveEdit(todo.id)}>💾</button>
                <button onClick={() => setEditingId(null)}>❌</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTodo(todo.id)}>
                  {todo.text}
                </span>
                <button className="edit" onClick={() => startEdit(todo)}>✏️</button>
                <button onClick={() => deleteTodo(todo.id)}>🗑</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
