import actions from '../actions/action-types'

const initialState = {
    isAuth: false,
    userData: {}
}

const userReducer = (state = initialState, action) => {
    console.log(action)
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
    default:
        return state
    }
}

export default userReducer
