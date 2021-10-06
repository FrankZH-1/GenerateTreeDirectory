<template>
  <div><Root></Root> <Content></Content>hello</div>
</template>

<script>
import Root from "./DirectoryRoot.vue";
import Content from "./DirectoryContent.vue";
export default {
  name: "Directory",
  components: {
    Root,
    Content,
  },
};
</script>