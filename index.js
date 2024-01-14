import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import ListItem from './ListItem';

function App() {
  document.title = 'Simple Todo List Example';

  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([
    { id: '1', text: 'Groceries' },
    { id: '2', text: 'Dry Cleaning' },
  ]);

  function createNewTodo() {
    if (todoItem !== '') {
      const item = { id: todoList.length, text: todoItem };
      const tempArray = [...todoList, item];
      setTodoList(tempArray);
    }
    setTodoItem('');
  }

  function handleAdd(e) {
    e.preventDefault();
    createNewTodo();
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      createNewTodo();
    }
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5 col-8">
      <h3>Simple Todo List</h3>
      <h6>{todoList.length} items</h6>
      <div className="input-group">
        <input
          type="text"
          name="todoItem"
          className="form-control"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.currentTarget.value);
          }}
          onKeyPress={handleKeyPress}
        />

        <div className="input-group-append">
          <button type="button" onClick={handleAdd} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
      <div className="mt-2">
        {todoList.length ? (
          <ul>
            <ListItem list={todoList} deleteItem={deleteItem} />
          </ul>
        ) : (
          <p>No items to list.</p>
        )}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
