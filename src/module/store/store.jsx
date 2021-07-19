import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/RootReducer.jsx';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
