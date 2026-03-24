import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { getTodos, addTodo } from '../api/todos'
import type { Todo } from '../types/todo'

export const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

export const useAddTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newTodo: Todo) => addTodo(newTodo),

    onSuccess: (addedTodo) => {
      // keshni qo'lda yangilash
      queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) => [...oldTodos, addedTodo])
    }
  })
}