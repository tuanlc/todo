<template>
  <form @submit="onSubmit">
    <p>Add a new task: </p>
    <input placeholder="Enter a todo task" v-model="title" autofocus/>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: null
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit('on-adding', this.title);
      this.title = '';
    }
  }
}
</script>