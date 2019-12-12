<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Hello world"/>
    <AddTodo />
    <Todos v-bind:todos="mytodos" />
    {{msg}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Todos from './components/todos.vue';
import AddTodo from './components/AddTodo.vue';


export default {
  name: 'app',
  components: {
    HelloWorld,
    Todos,
    AddTodo
  },
  data () {
    return{
      msg: 'Hello',
      mytodos: [
        {id: 1, title: 'todo 1', completed: false},
        {id: 2, title: 'todo 2', completed: false},
        {id: 3, title: 'todo 3', completed: false},
      ],

    }
  },
  created() {
    
  },

}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
