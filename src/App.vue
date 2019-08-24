<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCount({n:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Count
  },

  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     // 调用mutations里面的incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     // 调用mutations里面的decrementCount
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
};
</script>

<style>
</style>
