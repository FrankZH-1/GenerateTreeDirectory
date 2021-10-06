<template>
  <ul>
    <li v-for="child in children" :key="child.name">
      <Root v-if="child.children" :folder="child"></Root>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import Root from "./DirectoryRoot.vue";
export default {
  name: "Content",
  components: {
    Root,
  },
  props: ["children"],
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>