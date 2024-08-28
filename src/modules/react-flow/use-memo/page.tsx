import { Container, Flex, SegmentedControl, Text, Title } from '@mantine/core';
import React from 'react';
import FixedUseMemo from './components/fixed-use-memo';
import RemountUseMemo from './components/remount-use-memo';
import ReassignUseMemo from './components/reassign-use-memo';

enum UseMemoSectionEnum {
  explanation = 'explanation',
  fixed = 'fixed',
  remount = 'remount',
  reassign = 'reassign variable',
}
const description = `
Explanation:
1. useMemo, useCallback, memo, and other memoization has cleared when component unmounts or remounts.

2. useMemo re-run the function if dependencies' memory references change.

Note: If your component frequently re-renders and uses non-primitive data types as dependencies, 
they will get new memory references unless memoized with useMemo or useCallback, leading to unnecessary re-renders. 
Primitive data types have fixed memory, so they don't need memoization.


However, primitive data types have fixed memory allocation, so you don't need to memoize them with useMemo.

You can see the code and try it out in todo-list.tsx.

// Primitive data types
const numberTest = 1;
const stringTest = '1';
const booleanTest = true;

// Non-primitive data types
const callbackTest1 = () => {};
const objectTest1 = {};

// Memoize non-primitive data types to keep memory references consistent
const callbackTest2 = React.useMemo(() => {}, []);
const objectTest2 = React.useMemo(() => ({}), []);

// useMemo re-runs if dependencies' memory references change
const visibleTodos = React.useMemo(() => {
  console.log('Triggered at:', new Date().getTime());
  return filterTodos(todos, tab);
}, [todos, tab, callbackTest2]);

Primitive Data Types: No need to memoize.
Non-Primitive Data Types: Should be memoized to prevent unnecessary re-renders.
useMemo: Re-runs when dependencies' memory references change
`;
export default function UseMemoPage() {
  const [segment, setSegment] = React.useState<string>(
    UseMemoSectionEnum.explanation,
  );

  return (
    <Container mih="100dvh" miw="100dvw" maw="100dvw" p={16}>
      <Flex direction="column" gap={16}>
        <Title order={2}>
          Depedencies and Memories Allocation Affection on useMemo and other
          hooks need depedencies
        </Title>
        <SegmentedControl
          data={[
            UseMemoSectionEnum.explanation,
            UseMemoSectionEnum.fixed,
            UseMemoSectionEnum.remount,
            UseMemoSectionEnum.reassign,
          ]}
          value={segment}
          onChange={setSegment}
        />
        {segment === UseMemoSectionEnum.explanation && (
          <>
            <Text>
              <pre>{description}</pre>
            </Text>
          </>
        )}
        {segment === UseMemoSectionEnum.fixed && <FixedUseMemo />}
        {segment === UseMemoSectionEnum.remount && <RemountUseMemo />}
        {segment === UseMemoSectionEnum.reassign && <ReassignUseMemo />}
      </Flex>
    </Container>
  );
}
