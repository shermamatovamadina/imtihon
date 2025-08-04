function TodoItem({ todo, dispatch, setEditingTodo }) {
    const toggleComplete = () => {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          ...todo,
          isCompleted: !todo.isCompleted,
        },
      });
    };
  
    return (
      <li style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        <strong>{todo.title}</strong> - {todo.description}
        <button onClick={toggleComplete}>
          {todo.isCompleted ? "✅" : "⬜️"}
        </button>
        <button onClick={() => setEditingTodo(todo)}>✏️</button>
        <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
          🗑️
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  