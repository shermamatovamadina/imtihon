import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ dispatch, editingTodo, setEditingTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    if (editingTodo) {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          ...editingTodo,
          title,
          description,
        },
      });
      setEditingTodo(null);
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: uuidv4(),
          title,
          description,
          isCompleted: false,
        },
      });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Sarlavha"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Tavsif"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{editingTodo ? "Yangilash" : "Qo‘shish"}</button>
    </form>
  );
}

export default TodoForm;
