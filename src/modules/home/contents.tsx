const contents = [
  {
    title: 'How to Slice Components?',
    content: `
Initially, write all your code within a single component. If you find yourself frequently copying and pasting the same code, it's time to create reusable components.
    `,
  },
  {
    title: 'What are Dependencies in useEffect, useCallback, and useMemo?',
    content: `
Dependencies are the values or memory addresses that your functions watch. When these values or their memory addresses change:

- useEffect will re-run the function.
- useCallback will revalidate the memoized function.
- useMemo will re-run the function to return a memoized value.
    `,
  },
  {
    title: 'When Does useEffect Run?',
    content: `
Understanding when useEffect triggers is crucial. It runs when:

1. The component is mounted.
2. A dependency in the useEffect array changes.
3. The component is unmounted.

useEffect consists of two sections:

1. Effect logic runs when the component mounts or a dependency changes.
2. Cleanup logic runs when the component unmounts.

useEffect(() => {
  // Effect logic here

  return () => {
    // Cleanup logic here
  };
}, [dependencies]);

References: 
https://react.dev/learn/escape-hatches
https://react.dev/reference/react/useEffect
    `,
  },
  {
    title: 'Differences Between useMemo and useCallback',
    content: `
1. useMemo is used to memoize a value. The function inside useMemo is not triggered if none of the dependencies change. It returns the current value and retains its memory address.
2. useCallback memoizes the function itself. If the dependencies don’t change, useCallback retains the memory address of the function.

References:
https://dev.to/kopal__/difference-between-useeffect-usememo-usecallback-hooks-17on
https://react.dev/reference/react/useMemo
https://react.dev/reference/react/useCallback
    `,
  },
  {
    title:
      'When are useCallback, useMemo, memo, and Other Memoized Values Cleared?',
    content: `
Memoized values are cleared when the component that uses them is unmounted or remounted.
    `,
  },
];

export default contents;
