import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadingReducer from '@shared/loader/loadingReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;