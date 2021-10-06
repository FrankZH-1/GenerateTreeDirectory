<template>
  <div class="container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="directory-container"><Directory></Directory></div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Directory from "./components/directory/Directory.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Directory,
  },
};
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
.container {
  display: flex;
}
.directory-container {
  width: 30%;
  height: 100%;
}
</style>
