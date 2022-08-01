import { createStore } from "vuex";
import projects from "../assets/data"

export default createStore({
  state: {
    selected: false,
    project: {},
  },
  mutations: {
    selectProject(state, payload) {
      state.selected = true
      state.project = payload
    },

    deSelectProject(state) {
      state.selected = false
      state.project = {}
    }
  },
  actions: {
    selectProject({ commit }, { id }) {
      commit("selectProject", projects.find(p => p.id === id))
    }
  },
});
