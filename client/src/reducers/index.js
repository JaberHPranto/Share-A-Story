import { combineReducers } from 'redux'
import auth from './auth'
import posts from './post'

export default combineReducers({
    posts,
    auth
})