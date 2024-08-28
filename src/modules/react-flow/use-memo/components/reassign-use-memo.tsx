import React from 'react';
import TodoList from './todo-list.js';
import { createTodos } from '../utils.js';
import RestComponent, { TabEnum } from './rest-component.js';
import { Title } from '@mantine/core';

const description = `
const todos = createTodos(); 'todos' returns a non-primitive data type. 
It gets a new memory allocation every time the component re-renders and reassigns it.
Explanation:
Since todos is a non-primitive data type, it gets a new memory reference each time the component re-renders, causing it to be re-assigned.

To avoid this, you should memoize todos using useMemo if you want to keep the same memory reference across renders.
  `;

export default function ReassignUseMemo() {
  const todos = createTodos(); // 'todos' returns a non-primitive data type. It gets a new memory allocation every time the component re-renders and reassigns it.

  /**
   * Explanation:
Since todos is a non-primitive data type, it gets a new memory reference each time the component re-renders, causing it to be re-assigned.
To avoid this, you should memoize todos using useMemo if you want to keep the same memory reference across renders.
   */

  const [tab, setTab] = React.useState(TabEnum.all);
  const [isDark, setIsDark] = React.useState(false);
  // re-render
  const component = (
    <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'} />
  );

  return (
    <>
      <Title order={4}>Click Checkbox isDark to feel the slow</Title>

      <RestComponent
        isDark={isDark}
        setIsDark={setIsDark}
        setTab={setTab}
        tab={tab}
      />
      {component}
      <pre>{description}</pre>
    </>
  );
}
