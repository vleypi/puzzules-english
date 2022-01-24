import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import profile from './actions/profile.js';
import created from './actions/created.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    profile,
    created
})
  

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export default store