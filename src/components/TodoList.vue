<template>
  <div class="todo-list" v-bind:style="{ 'background-color': label.color }">
    <h2>{{ label.title }}</h2>
    <draggable group="todos" @start="drag=true" @end="drag=false" :move="onMove">
      <div v-for="(todo, index) in labeledTodos" :key="index">
        <todo-item v-bind:todo="todo" />
      </div>
    </draggable>
    <todo-form @on-adding="addTodo"/>
    <div v-if="!labeledTodos.length">
      <p>There is no todo!</p>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import draggable from 'vuedraggable'
import TodoForm from './TodoForm.vue'

export default {
  name: 'TodoList',
  props: {
    label: {
      type: Object,
      required: true
    }
  },
  components: {
    TodoItem,
    TodoForm,
    draggable
  },
  data() {
    return {
    };
  },
  computed: {
    labeledTodos: function() {
      return this.$store.getters.labeledTodos(this.label.title)
    }
  },
  methods: {
    addTodo (title) {
      this.$store.dispatch('addTodo', { title, label: this.label.title });
    },
    onMove (event, originalEvent) {
      console.log(444, event); //eslint-disable-line
      console.log(55555, originalEvent); //eslint-disable-line
      
      return;
    }
  }
}
</script>

<style scoped>
  .todo-list {
    text-align: left;
    width: 50%;
  }
</style>