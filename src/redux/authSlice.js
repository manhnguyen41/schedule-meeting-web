import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUserId: null,
            isFetching: false,
            error: false,
        },
        register: {
            isFetching: false,
            success: false,
            error: false,
        },
    },
    reducers: {
        loginStart: state => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currentUserId = action.payload
            state.login.error = false
        },
        loginFailed: state => {
            state.login.isFetching = false
            state.login.currentUserId = null
            state.login.error = true
        },
        registerStart: state => {
            state.register.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.register.isFetching = false
            state.register.error = false
            state.register.success = true
        },
        registerFailed: state => {
            state.register.isFetching = false
            state.register.error = true
            state.register.success = false
        },
        logOutStart: state => {
            state.login.isFetching = true
        },
        logOutSuccess: (state) => {
            state.login.isFetching = false
            state.login.currentUserId = null
            state.login.error = false
        },
        logOutFailed: state => {
            state.login.isFetching = false
            state.login.error = true
        }
    },
})

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerFailed,
    registerSuccess,
    logOutStart,
    logOutFailed,
    logOutSuccess,
} = authSlice.actions

export default authSlice.reducer