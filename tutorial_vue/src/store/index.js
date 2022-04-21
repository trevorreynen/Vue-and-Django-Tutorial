import { createStore } from 'vuex'

export default createStore({
    state: {
        isLoading: false,
        isAuthenticated: false,
        token: ''
    },
    getters: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.isAuthenticated = true
            } else {
                state.token = ''
                state.isAuthenticated = false
            }
        },
        setIsLoading(state, status) {
            state.isLoading = status
        },
        setToken(state, token) {
            state.token = token
            state.isAuthenticated = true
        },
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
