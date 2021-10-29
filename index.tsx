import * as React from 'react';
import { render } from 'react-dom';
import { AddTodoList } from './components/AddTodoList';
import { ResetDatabaseButton } from './components/ResetDatabaseButton';
import { TodoLists } from './components/TodoLists';
import './style.css';

function App() {
  return (
    <div>
      <TodoLists />
      <AddTodoList />
      <ResetDatabaseButton />
    </div>
  );
}

render(<App />, document.getElementById('root'));
