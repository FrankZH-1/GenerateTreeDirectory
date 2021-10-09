<template>
  <div class="container">
    <div class="directory-container"><Directory></Directory></div>
    <span class="verticle-line"></span>
    <div class="article"><Article></Article></div>
  </div>
</template>

<script>
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

<style scoped>
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
  width: 30%;
  height: 100vh;
  overflow-y: scroll;
  text-align: left;
}
.article {
  width: 70%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: auto;
  word-wrap: break-word;
}
.verticle-line {
  display: block;
  background: black;
  width: 1px;
  height: 100vh;
  margin: 0 15px;
  transform: scaleX(0.5);
  opacity: 40%;
}
</style>
