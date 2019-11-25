<template>
  <div class="todo-item">
    <label>{{ todo.title }}</label>
    <button v-on:click="removeTodo()">x</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeTodo () {
      this.$store.dispatch('removeTodo', this.todo.id);
    }
  }
}
</script>

<style scoped>
  .todo-item {
    width: 20em;
    height: 2em;
    border: solid gray 1px;
  }
</style>