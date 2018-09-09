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

const defaultProps = {
    users: [],
    user: {},
    loading: false
}

export default (state = defaultProps, action = {}) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case FETCH_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload.results
            }
        }

        case SORT_USER_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case SORT_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        }

        case SHOW_USER_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case SHOW_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }

        case HIDE_USER_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case HIDE_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: {}
            }
        }

        default: {
            return state
        }
    }
}