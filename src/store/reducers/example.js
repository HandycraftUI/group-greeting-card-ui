import {EXAMPLE_ACTION} from '../actions/action-types'

const initialState = {
    data: 'example Data'
}

const exampleReducer = () => (state = initialState, action) => {
    switch (action.type) {
    case EXAMPLE_ACTION:
        return {
            ...state,
            data: action.payload
        }
    default:
        console.log(state)
        return state
    }
}

export default exampleReducer
