<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCountAsync({n:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>

    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">FetchData</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

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
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])
  // methods: mapMutations(["incrementCount", "decrementCount"]),
  // methods: {
  //   incrementCount() {
  //     // 触发actions  dispatch分发
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrementCount(n) {
  //     // 触发actions
  //     this.$store.dispatch("decrementCountAsync", n);
  //   },
  //   fetchData() {
  //     // 触发actions
  //     this.$store.dispatch("fetchDataAsync");
  //   }
  // }
};
</script>

<style>
</style>
