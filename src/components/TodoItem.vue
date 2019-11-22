<template>
  <div class="todo-item">
    <input type="checkbox" id="checkbox" v-model="todo.done">
    <label :class="{ checkedItem: todo.done }">{{ todo.title }}</label>
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

  .checkedItem {
    text-decoration: line-through;
    background-color: yellow;
  }
</style>