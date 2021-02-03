import { createStore } from 'redux'
import rootreducer from '../reducer/index'

const store = createStore(rootreducer)
export default store;