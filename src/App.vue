<template>
  <div class="container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="directory-container"><Directory></Directory></div>
    <div class="article-container"><Article></Article></div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Directory from "./components/directory/Directory.vue";
import Article from "./components/article.vue";

export default {
  name: "App",
  components: {
    Directory,
    Article,
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
}
.container {
  display: flex;
  margin: 0;
  padding: 0;
}
.directory-container {
  height: 100vh;
  overflow-y: scroll;
  text-align: left;
}
.article-container {
  width: 70%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: auto;
  word-wrap: break-word;
}
</style>
