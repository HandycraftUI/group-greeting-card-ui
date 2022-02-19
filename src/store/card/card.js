import actions from '../actions/action-types'

const initialState = {
    cardImage: 'https://i.pinimg.com/originals/a7/47/18/a74718565f52769898ac2361c8260cf0.jpg'
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.SETUP_CARD:
    {
        return {
            ...state,
            cardImage: state.cardImage
        }
    }
    default:
        return state
    }
}

export default cardReducer
