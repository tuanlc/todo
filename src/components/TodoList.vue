<template>
  <div class="todo-list">
    <h2>Todo List</h2>
    <div v-for="(todo, index) in todos" :key="index">
      <todo-item v-bind:todo="todo" />
    </div>
    <div v-if="!todos.length">
      <p>There is no todo!</p>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  },
  data() {
    return {
    };
  }
}
</script>

<style scoped>
  .todo-list {
    text-align: left;
    width: 50%;
  }
</style>