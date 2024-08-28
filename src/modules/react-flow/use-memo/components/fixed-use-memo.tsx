import React from 'react';
import TodoList from './todo-list.js';
import { createTodos } from '../utils.js';
import RestComponent, { TabEnum } from './rest-component.js';
import { Title } from '@mantine/core';

const description = `
Explanation:
1. The todos variable is initialized outside the FixedUseMemo component, ensuring that it is only created once and does not get re-assigned on re-renders or re-mounts.

2. Since todos is not recreated, there’s no need to memoize it with useMemo.

3. Additionally, because TodoList is not conditionally rendered (like in your previous examples with isDark &&), it won't be remounted unnecessarily. 
This means that any useMemo hooks within TodoList will work as expected and persist their memoized values across re-renders.
  `;

const todos = createTodos();

export default function FixedUseMemo() {
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
