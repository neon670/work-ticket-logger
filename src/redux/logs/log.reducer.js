import LogActionTypes from './logs-types';


const initalState ={
	logs: null,
	current: null,
	loading: false,
	error: null
}

export default (state = initalState, action) => {
	switch(action.type){
		case LogActionTypes.GET_LOGS:
			return{
				...state,
				logs: action.payload,
				loading: false
			};
		case LogActionTypes.ADD_LOG:
			return{
				...state,
				logs: [...state.logs, action.payload],
				loading: false
			}
		case LogActionTypes.UPDATE_LOG:
			return{
				...state,
				logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
			};
		case LogActionTypes.DELETE_LOG:
			return{
				...state,
				logs: state.logs.filter(log => log.id !== action.payload),
				loading: false
			}
		case LogActionTypes.SEARCH_LOGS:
			return{
				...state,
				logs: action.payload
			};
		case LogActionTypes.SET_CURRENT:
			return{
				...state,
				current: action.payload
			};
		case LogActionTypes.CLEAR_CURRENT:
			return{
				...state,
				current: null
			};
		case LogActionTypes.SET_LOADING:
			return{
				...state,
				loading: true
		};
		case LogActionTypes.ERROR_LOG:
			console.error(action.payload);
			return{
				...state,
				error: action.payload
			}
		default:
			return state;
	}
}