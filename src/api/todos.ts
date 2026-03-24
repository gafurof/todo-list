import type { Todo } from "../types/todo";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};


export const addTodo = async (todo : Todo) : Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};