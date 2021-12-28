import {CHANGE_THEME} from '../actions/action-types'

const initialState = {
    theme: 'light'
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_THEME:
        return {
            ...state,
            theme: action.payload
        }
    default:
        return state
    }
}

export default commonReducer
