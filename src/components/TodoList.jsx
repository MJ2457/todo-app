import { useMemo } from "react";
import { TodoCard } from "./TodoCard";

export function TodoList({ todos, selectedTab, ...otherProps }) {
  const filterTodosList = useMemo(() => {
    switch (selectedTab) {
      case "All":
        return todos;
      case "Completed":
        return todos.filter((todo) => todo.complete);
      case "Open":
        return todos.filter((todo) => !todo.complete);
      default:
        return [];
    }
  }, [todos, selectedTab]);

  return (
    <>
      {filterTodosList.map((todo, index) => (
        <TodoCard
          key={todo.id || index}
          todoIndex={todos.findIndex((val) => val.input === todo.input)}
          {...otherProps}
          todo={todo}
        />
      ))}
    </>
  );
}
