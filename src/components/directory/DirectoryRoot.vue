<template>
  <div class="item-container">
    <a
      class="text-container"
      :href="`#${folder.name}`"
      @click="show = 1"
      @contextmenu.prevent="show = 0"
      >{{ folder.name }}
      <!-- <div class="show-button" @click="show = !show"></div> -->
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
  /* padding-left: 20px; */
  /* padding-top: 10px; */
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