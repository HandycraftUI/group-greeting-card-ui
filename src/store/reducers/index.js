import { combineReducers } from 'redux'
import common from './common'
import user from '../user/user'

const rootReducer = combineReducers({
    common,
    user
})

export default rootReducer
