import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import headerTitle from './headerTitle/reducer';

const reducers = combineReducers({
  authUser,
  data:headerTitle
});

export default reducers;