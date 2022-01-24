import actions from '../actions/action-types'

const initialState = {
    isAuth: false,
    userData: {
        firstName: '',
        lastName: '',
        email: ''
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.IS_AUTHENTICATED:
    {
        return {
            ...state,
            isAuth: !state.isAuth
        }
    }
    case actions.REGISTER_USER:
    {
        return {
            ...state,
            userData: {
                ...action.payload
            }
        }
    }
    case actions.LOGOUT_USER:
    {
        return {
            ...state,
            userData: { ...initialState }
        }
    }
    default:
        return state
    }
}

export default userReducer
