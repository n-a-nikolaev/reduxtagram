import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';



const StoreFactory = (reducers, defaultState, browserHistory) => createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    defaultState,
    applyMiddleware(routerMiddleware(browserHistory))
);

export default StoreFactory;
