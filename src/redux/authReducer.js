import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isLoading: false,
    errorMessage: ''
}

export const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        addToken: (state, action) => ({
            ...state,
            token: action.payload
        }),
        authLoading: (state, action) => ({
            ...state,
            isLoading: action.payload
        }),
        addErrorMessage: (state, action) => ({
            ...state,
            errorMessage: action.payload
        }),
        authLogout: state => ({
            ...state,
            token: null
        })
    }
})

export const auth = userInfo => dispatch => {
    dispatch(authLoading(true))
    const { email, password, newUser } = userInfo
    const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'
    const apiKey = '?key=AIzaSyCh9iVYHp13GnY-_z-GRYWTjYrfLVyiMQk'
    let userType = null;
    if (newUser) {
        userType = 'signUp'
    } else {
        userType = 'signInWithPassword'
    }
    const endpoint = baseUrl + userType + apiKey
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ email, password })
    }
    ).then(
        response => response.json()
    ).then(
        data => {
            if (data.error) {
                dispatch(addErrorMessage(data.error.message))
            }
            localStorage.setItem('token', data.idToken)
            dispatch(addToken(data.idToken))
            dispatch(authLoading(false))
        }
    ).catch(error => console.log(error))
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token')
    if (token !== 'undefined') {
        dispatch(addToken(token))
    }
}

export const logout = () => dispatch => {
    localStorage.clear()
    dispatch(authLogout())
}

export const { addToken, authLoading, addErrorMessage, authLogout } = authReducer.actions;
export default authReducer.reducer