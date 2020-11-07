import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import menuReducer from './menuReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer