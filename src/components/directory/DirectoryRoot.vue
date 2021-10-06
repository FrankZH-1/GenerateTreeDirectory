<template>
  <div>
    <span>{{ folder.name }}</span>
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