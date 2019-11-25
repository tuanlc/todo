<template>
  <div id="app">
    <draggable class="container" group="labels" @start="drag=true" @end="drag=false">
      <div class="container-item" v-for="(label, index) in labels" :key="index">
        <todo-list v-bind:label="label" :todos="todos" />
      </div>
    </draggable>
    <todo-form @on-adding="addTodo"/>
  </div>
</template>

<script>

import draggable from 'vuedraggable'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoForm,
    draggable
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      addTodo (title) {
        this.$store.dispatch('addTodo', { title });
      }
    })
  },
  computed: {
    ...mapState([
      "todos",
      "labels"
    ])
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
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.container {
  display: flex;
  flex-direction: row;
}

.container-item {
  width: 25em;
  border: solid gray 1px;
}
</style>
