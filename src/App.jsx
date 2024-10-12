import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  const handleCompleteTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodoList = [...prevTodos];
      newTodoList[index] = { ...newTodoList[index], complete: true };
      handleSaveData(newTodoList);
      return newTodoList;
    });
  };

  const handleEditTodo = (index, newTodo) => {
    setTodos((prevTodos) => {
      const newTodoList = prevTodos.map((todo, i) =>
        i === index ? { ...todo, input: newTodo } : todo
      );
      handleSaveData(newTodoList);
      return newTodoList;
    });
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodoList = prevTodos.filter((_, i) => i !== index);
      handleSaveData(newTodoList);
      return newTodoList;
    });
  };

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({todos: currentTodos}));
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todo-app');
    if (storedTodos) {
      try {
        const { todos: parsedTodos } = JSON.parse(storedTodos);
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error parsing stored todos:', error);
      }
    }
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList      
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
