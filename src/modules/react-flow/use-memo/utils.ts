export function createTodos() {
  const todos = [];
  return todos;
}

export function filterTodos(todos, tab) {
  console.log(
    '[ARTIFICIALLY SLOW] Filtering ' +
      todos.length +
      ' todos for "' +
      tab +
      '" tab.',
  );
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter((todo) => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else if (tab === 'completed') {
      return todo.completed;
    }
  });
}
