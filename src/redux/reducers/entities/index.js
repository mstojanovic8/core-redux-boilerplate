import { combineReducers } from 'redux';

import usersReducer from './users';

const entities = combineReducers({
  users: usersReducer
});

export default entities;
