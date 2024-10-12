import { useState, useCallback } from "react";

export function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (inputValue.trim()) {
      handleAddTodo(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, handleAddTodo]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <button onClick={handleSubmit}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
