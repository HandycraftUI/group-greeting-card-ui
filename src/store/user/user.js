import actions from '../actions/action-types'

const initialState = {
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.IS_AUTHENTICATED:
    {
        const newState = state.isAuth === false ? true : false
        return {
            isAuth: newState
        }
    }
    default:
        return state
    }
}

export default userReducer
