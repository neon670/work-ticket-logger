import { combineReducers } from 'redux';
import logReducer from './logs/log.reducer';
import techReducer from './technicians/tech-reducer';

export default combineReducers({
	log: logReducer,
	technician: techReducer
});