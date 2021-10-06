<template>
  <div><Root :folder="this.directory"></Root></div>
</template>

<script>
import Root from "./DirectoryRoot.vue";
// import Content from "./DirectoryContent.vue";
export default {
  name: "Directory",
  components: {
    Root,
    // Content,
  },
  data: function () {
    return {
      directory: {
        name: "1",
        children: [
          {
            name: "1.1",
            children: [
              { name: "1.1.1", children: [] },
              { name: "1.1.2", children: [] },
            ],
          },
          {
            name: "1.2",
            children: [],
          },
        ],
      },
    };
  },
};
</script>