<template>
  <div class="directory-container"><Root :folder="directory"></Root></div>
</template>

<script>
import Root from "./DirectoryRoot.vue";
import { build } from "../../ts/buildTree";
export default {
  name: "Directory",
  components: {
    Root,
  },
  data: function () {
    return {
      directory: {},
    };
  },
  methods: {
    load: function () {
      let item = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
      this.directory = build(item);
    },
  },
  mounted: function () {
    this.load();
  },
};
</script>
<style scoped>
div {
  margin: 10px;
}
</style>