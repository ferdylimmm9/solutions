import React from 'react';
import TodoList from './todo-list.js';
import { createTodos } from '../utils.js';
import RestComponent, { TabEnum } from './rest-component.js';
import { Title } from '@mantine/core';

const todos = createTodos();

const description = `
// The component always remounts, and the useMemo cache is cleared from memory
const component = isDark && (
  <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'} />
);

Explanation:
In this example, TodoList will remount every time isDark changes. This causes any memoized values inside TodoList to be cleared, as the component is unmounted and then remounted.
As a result, the useMemo cache within TodoList does not persist, leading to a reset of memoized values.
  `;

export default function RemountUseMemo() {
  const [tab, setTab] = React.useState(TabEnum.all);
  const [isDark, setIsDark] = React.useState(false);

  // the component always remount and the usememo memoized has cleared from memroies
  const component = isDark && (
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
