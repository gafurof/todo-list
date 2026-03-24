<template>
  <div class="add-list">
    <input v-model="title" placeholder="Todo yoz..." />
    <button @click="handleAdd" :disabled="mutation.isLoading">
      {{ mutation.isLoading ? 'Qoshilmoqda...' : 'Qoshish' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAddTodo } from '@/queries/useTodos'

const title = ref<string>('')

const mutation = useAddTodo()

const handleAdd = () => {
  if (!title.value) return

  mutation.mutate({ title: title.value, completed: false })

  title.value = ''
}
</script>

<style scoped>
.add-list {
  width: 100%;
  max-width: 600px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004080;
}
</style>