<template>
  <div class="todo-list">
    <h2>Todos</h2>

    <p v-if="isLoading || isFetching">Loading...</p>
    <p v-else-if="error">Xatolik!</p>

    <ul v-else class="list">
      <li v-for="todo in data ?? []" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>

    <button @click="() => refetch()">Yangilash</button>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from "@/queries/useTodos";

const { data, isLoading, isFetching, error, refetch } = useTodos();
</script>

<style scoped>
.todo-list {
  width: 100%;
  max-width: 600px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.list {
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  gap: 5px;
  display: flex;
  flex-direction: column;
}

.list::-webkit-scrollbar {
  width: 0px;
}

.list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.list li:nth-child(odd) {
  background-color: #f1f1f1;
}

.list li:nth-child(even) {
  background-color: #fff;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004080;
}
</style>
