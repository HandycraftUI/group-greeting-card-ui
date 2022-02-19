import { combineReducers } from 'redux'
import common from './common'
import user from '../user/user'
import card from '../card/card'

const rootReducer = combineReducers({
    common,
    user,
    card
})

export default rootReducer
