<template>
  <div>
    <span class="text-container">{{ folder.name }}</span>
    <Content :children="folder.children"></Content>
  </div>
</template>

<script>
export default {
  name: "Root",
  components: {},
  props: ["folder"],

  beforeCreate: function () {
    this.$options.components.Content =
      require("./DirectoryContent.vue").default;
  },
};
</script>
<style scoped>
ul {
  margin: 0;
  padding-left: 20px;
  padding-top: 10px;
}
span {
  white-space: nowrap;
}
</style>