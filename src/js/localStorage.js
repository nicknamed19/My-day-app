function useLocalStorage(itemName, data) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedTodos;

  if (!localStorageItem) {
    parsedTodos = localStorage.setItem(itemName, JSON.stringify(data));
  } else {
    localStorage.setItem(itemName, JSON.stringify(data));
    parsedTodos = JSON.parse(localStorageItem);
  }

  return { parsedTodos };
}

export { useLocalStorage };
