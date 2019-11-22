<template>
  <div class="todo-item">
    <label>{{ todo.title }}</label>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
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