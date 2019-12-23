<template>
  <div id="app" >
    <appHeader></appHeader>
    <router-view v-on:change_title="changeTitle"></router-view>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader
  },
  methods: {
    changeTitle: function (title, className) {
      document.getElementById("nav_title").innerHTML = title
      document.getElementById("app").classList = ''
      document.getElementById("app").classList.add(className);
    }
  },
}
</script>

<style>
body{
  margin:0;
  padding:0;
  border:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9fb;
  margin-top: 60px;
  width: 375px;
  height: 667px;
  margin: 0 auto;
  overflow: hidden; 
  position:relative;
}
</style>
