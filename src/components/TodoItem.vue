<template>
  <div>
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
  .checkedItem {
    text-decoration: line-through;
    background-color: yellow;
  }
</style>