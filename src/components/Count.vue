<template>
  <div id="count">
    <div>
      <hr />
      <h1>count.vue:{{count}}</h1>
      <p>count.vue:{{todos}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "count",
  components: {},
  //   computed:{
  //       ...mapState:(["count","todos"])
  //   }
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style>
</style>
