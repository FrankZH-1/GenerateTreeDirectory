<template>
  <div><Root :folder="directory"></Root></div>
</template>

<script>
import Root from "./DirectoryRoot.vue";
export default {
  name: "Directory",
  components: {
    Root,
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
  methods: {
    load: function () {
      let item = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
      console.log(item);
    },
  },
  mounted: function () {
    this.load();
  },
};
</script>