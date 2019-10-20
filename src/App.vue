<template>
  <div id="app">
    <todo-list :todos="todos"/>
    <todo-form @on-adding="addTodo"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoForm
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        title
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-content: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
