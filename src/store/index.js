import { createStore } from 'redux'
import rootReducer from './reducers'

const index = createStore(rootReducer)
export default index
