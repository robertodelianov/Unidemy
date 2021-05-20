import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tripsReducer from './reducers/tripsReducer';

const store = createStore(tripsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;