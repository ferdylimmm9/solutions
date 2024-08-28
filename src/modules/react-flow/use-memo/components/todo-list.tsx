import React from 'react';
import { filterTodos } from '../utils';

export default function TodoList({ todos, theme, tab }) {
  // primitive data type
  const numberTes = 1;
  const stringTes = '1';
  const booleanTest = true;

  // non primitive data type
  const callbackTes1 = () => {};
  const objectTes1 = {};

  // you must memoize the primitive data type for keep the memories allocation
  const callbackTes2 = React.useMemo(() => {}, []);
  const objectTes2 = React.useMemo(() => {
    return {};
  }, []);

  // when the usememo depedencies memories isn't same with usememo dependecies memories the usememo will re-run the function
  const visibleTodos = React.useMemo(() => {
    console.log('triggered', new Date().getTime());
    return filterTodos(todos, tab);
  }, [todos, tab, callbackTes2]);

  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
