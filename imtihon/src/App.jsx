import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./reducer/todoReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [editingTodo, setEditingTodo] = useState(null);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: "SET_TODOS",
          payload: data.map(todo => ({
            ...todo,
            description: "Tavsif yo'q",
          })),
        })
      );
  }, []);

  return (
    <div className="container">
      <h1> ToDo List</h1>
      <button onClick={toggleTheme}>Rejimni o`zgartirish</button>
      <TodoForm
        dispatch={dispatch}
        editingTodo={editingTodo}
        setEditingTodo={setEditingTodo}
      />
      <TodoList
        todos={todos}
        dispatch={dispatch}
        setEditingTodo={setEditingTodo}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
