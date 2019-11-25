import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    labels: [{
      title: "Open",
      isCategory: true,
      color: "yellow"
    }, {
      title: "Close",
      isCategory: true,
      color: "gray"
    }]
  },
  getters: {
    categorizedLabels (state) {
      return state.labels.filter(label => label.isCategory)
    },
    labeledTodos: state => (label="Open") => {
      return state.todos.filter(todo => todo.label === label)
    }
  },
  mutations: {
    addTodo (state, todo) {
      todo.id = todo.id || uuidv4()
      if (state.todos.find(_todo => _todo.id === todo.id)) {
        throw new Error("To do id is duplicated. Please use updateTodo method if you want to update a specific todo")
      }

      state.todos.push(todo)
    },
    removeTodo (state, id) {
      const todo = state.todos.find(todo => todo.id === id)

      if (todo) {
        const index = state.todos.indexOf(todo)

        state.todos.splice(index, 1)
      }
    },
    updateTodo (state, todo) {
      const found = state.todos.find(_todo => _todo.id === todo.id)

      if (!found) {
        throw new Error(`Todo ${todo} does not exist. Please use addTodo method if you want to add a new todo`)
      }

      state.todos.push(todo);
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('addTodo', todo)
    },
    removeTodo ({ commit }, id) {
      commit('removeTodo', id)
    },
    updateTodo ({ commit }, todo) {
      commit('updateTodo', todo)
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
