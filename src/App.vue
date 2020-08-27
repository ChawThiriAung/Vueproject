<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<div>
  <b-card no-body>
    <b-tabs pills card>

      <b-tab title="Testing" active><b-card-text><Testing></Testing></b-card-text></b-tab>
      <b-tab title="Homework"><b-card-text><Homework></Homework></b-card-text></b-tab>
      
    </b-tabs>
  </b-card>
</div>

    
  </div>
</template>

<script>
import Testing from './components/Testing.vue'
import Homework from './components/Homework.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld //HelloWorld
    Testing,
    Homework
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
