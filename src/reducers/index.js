import { combineReducers } from 'redux';
import testReducer from './test-reducer';
import HomeReducer from './home-reducer';

export default combineReducers({
    testReducer: testReducer,
    fields: HomeReducer
});