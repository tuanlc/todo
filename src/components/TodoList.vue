<template>
  <div class="todo-list">
    <h2>{{ category }}</h2>
    <draggable group="todos" @start="drag=true" @end="drag=false">
      <div v-for="(todo, index) in todos" :key="index">
        <todo-item v-bind:todo="todo" />
      </div>
    </draggable>
    <div v-if="!todos.length">
      <p>There is no todo!</p>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import draggable from 'vuedraggable';

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  components: {
    TodoItem,
    draggable
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