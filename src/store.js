import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true },
    ]
  },
  getters: {
    count: state => state.count,
    // count(state) {
    //   return ++state.count
    // }
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.n,
    setTodos: (state, todos) => state.todos = todos
  },
  actions: {
    // incrementCountAsync: context => {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        // 解构
        // const object = {
        //   name: "assion",
        //   age: 20
        // }
        // const name = object.name;
        // const { name, age } = object;

        // context 等同于 this.$store
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        context.commit("decrementCount", payload)
      }, 1000)
    },
    async fetchDataAsync(context) {
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data);

    }
  }
})
