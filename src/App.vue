<template>
  <div id="app">
    <draggable class="container" group="categories" @start="drag=true" @end="drag=false">
      <div v-for="(category, index) in categories" :key="index">
        <todo-list v-bind:category="category" :todos="todos" />
      </div>
    </draggable>
    <todo-form @on-adding="addTodo"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import draggable from 'vuedraggable'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoForm,
    draggable
  },
  data() {
    return {
      todos: [],
      categories: ["Open", "Todo", "Close"]
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

.container {
  display: flex;
  flex-direction: row;
}
</style>
