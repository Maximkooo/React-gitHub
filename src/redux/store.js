import {createStore, applyMiddleware} from "redux"
import rootReducer from "./root.reducer"
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
  collapsed: true
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;