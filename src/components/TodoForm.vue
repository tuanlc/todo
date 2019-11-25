<template>
  <form @submit="onSubmit">
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
      if (!this.title) return;

      this.$emit('on-adding', this.title);
      this.title = '';
    }
  }
}
</script>