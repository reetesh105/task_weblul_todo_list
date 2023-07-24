import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your Data"
          style={{ padding: '8px', marginRight: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '60%' }}
        />
        <button onClick={addTodo} style={{ padding: '8px', background: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0' }}>
            <span>{todo}</span>
            <button onClick={() => removeTodo(index)} style={{ padding: '4px', background: '#f44336', color: '#fff', border: 'none', borderRadius: '4px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
