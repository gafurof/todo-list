<template>
  <div class="app">
    <h1>Todo App (TS, VUE-QUERY)</h1>
    <TodoList />
    <AddTodo />
  </div>
</template>

<script setup lang="ts">
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
</script>

<style scoped>
.app{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
  padding: 0 5%;
}
h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 0px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>