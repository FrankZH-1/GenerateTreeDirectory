<template>
  <div class="item-container">
    <a
      class="text-container"
      :href="`#${folder.name}`"
      @contextmenu.prevent="show = !show"
      >{{ folder.name }}
    </a>
    <Content :children="folder.children" v-if="show"></Content>
  </div>
</template>

<script>
export default {
  name: "Root",
  components: {},
  props: ["folder"],
  data: function () {
    return { show: 0 };
  },
  beforeCreate: function () {
    this.$options.components.Content =
      require("./DirectoryContent.vue").default;
  },
};
</script>
<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
}
.show-button {
  width: 16px;
  height: 16px;
  background-color: black;
  display: inline-block;
}
ul {
  margin: 0;
}
a {
  white-space: nowrap;
}
a:link,
:visited {
  text-decoration: none;
  color: black;
}
a:hover {
  color: rgb(70, 211, 145);
}
</style>