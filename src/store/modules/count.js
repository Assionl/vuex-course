const state = {
    count: 0,
};
const getters = {
    count: state => state.count,
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.n,
};
const actions = {
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
};

export default {
    state, getters, mutations, actions
}