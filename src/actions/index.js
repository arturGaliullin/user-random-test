import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    SORT_USER_REQUEST,
    SORT_USER_SUCCESS,
    SHOW_USER_REQUEST,
    SHOW_USER_SUCCESS,
    HIDE_USER_REQUEST,
    HIDE_USER_SUCCESS
} from '../constants'
import axios from 'axios'

export function fetchUsers() {
    return dispatch => {
        dispatch({ type: FETCH_USER_REQUEST })
        axios.get('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture')
            .then(res => {
                console.log(res)
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: res.data
                })
            })
    }
}

export function sortBy(filter, data) {
    return dispatch => {
        dispatch({ type: SORT_USER_REQUEST })
        switch (filter) {
            case 'first_name': {
                return dispatch({
                    type: SORT_USER_SUCCESS,
                    payload: data.sort((a, b) => {
                        return a.name.first.localeCompare(b.name.first)
                    })
                })
            }

            case 'last_name': {
                return dispatch({
                    type: SORT_USER_SUCCESS,
                    payload: data.sort((a, b) => {
                        return a.name.last.localeCompare(b.name.last)
                    })
                })
            }

            case 'reverse': {
                return dispatch({
                    type: SORT_USER_SUCCESS,
                    payload: data.reverse()
                })
            }
        }
    }
}

export function showUser(user) {
    return dispatch => {
        dispatch({ type: SHOW_USER_REQUEST })
        dispatch({ type: SHOW_USER_SUCCESS, payload: user })
    }
}

export function hideUser() {
    return dispatch => {
        dispatch({ type: HIDE_USER_REQUEST })
        dispatch({ type: HIDE_USER_SUCCESS })
    }
}