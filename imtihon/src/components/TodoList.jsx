import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch, setEditingTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
          setEditingTodo={setEditingTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
