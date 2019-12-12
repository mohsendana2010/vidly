<template>
  <div>
    <h3>Add Todo</h3>
    <div>
      <form @submit="onsubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onsubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>
<style scoped>
</style>