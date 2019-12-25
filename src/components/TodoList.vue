<template>
  <div class="todo-list" v-bind:style="{ 'background-color': label.color }">
    <h2>{{ label.title }}</h2>
    <draggable group="todos" :list="labeledTodos" @start="drag=true" @end="drag=false" :move="onMove" :id="label.title">
      <div v-for="(todo, index) in labeledTodos" :key="index" :id="todo.id">
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
    getTodo: function(id) {
      return this.$store.getters.getTodo(id)
    },
    addTodo (title) {
      this.$store.dispatch('addTodo', { title, label: this.label.title });
    },
    onMove (event) {
      const toLabel = event.to.id;
      const todoId = event.dragged.id;
      const draggedTodo = this.getTodo(todoId);

      draggedTodo.label = toLabel;

      this.$store.dispatch('updateTodo', draggedTodo);
      
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