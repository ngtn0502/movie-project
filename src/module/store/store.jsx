import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './../redux/RootReducer';
import thunk from 'redux-thunk';
// Create store
export const store = createStore(rootReducer, applyMiddleware(thunk));
