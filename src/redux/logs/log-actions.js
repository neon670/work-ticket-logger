import LogActionTypes from './logs-types';

export const getLogs = () => async dispatch =>{
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type:LogActionTypes.GET_LOGS,
			payload: data
		});
	}catch(err){
		dispatch({
			type:LogActionTypes.ERROR_LOG,
			payload: err.response.statusText
		});
	}






	// return async (dispatch) =>{
	// 	setLoading();

	// 	const res = await fetch('/logs');
	// 	const data = await res.json();

	// 	dispatch({
	// 		type: GET_LOGS,
	// 		payload: data
	// 	});
	// };
};



export const addLog = (log) => async dispatch =>{
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type:LogActionTypes.ADD_LOG,
			payload: data
		});
	}catch(err){
		dispatch({
			type:LogActionTypes.ERROR_LOG,
			payload: err.response.statusText
		});
	}






	// return async (dispatch) =>{
	// 	setLoading();

	// 	const res = await fetch('/logs');
	// 	const data = await res.json();

	// 	dispatch({
	// 		type: GET_LOGS,
	// 		payload: data
	// 	});
	// };
};


export const deleteLog = id => async dispatch =>{
	try {
		setLoading();

		await fetch(`/logs/${id}`,{
			method: 'DELETE'
		});

		dispatch({
			type:LogActionTypes.DELETE_LOG,
			payload: id
		});
	}catch(err){
		dispatch({
			type:LogActionTypes.ERROR_LOG,
			payload: err.response.statusText
		});
	}






	// return async (dispatch) =>{
	// 	setLoading();

	// 	const res = await fetch('/logs');
	// 	const data = await res.json();

	// 	dispatch({
	// 		type: GET_LOGS,
	// 		payload: data
	// 	});
	// };
};


export const setCurrent = log => {
	return{
		type: LogActionTypes.SET_CURRENT,
		payload: log
	}
}


export const updateLog = log => async dispatch =>{
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`,{
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type:LogActionTypes.UPDATE_LOG,
			payload: data
		});
	}catch(err){
		dispatch({
			type:LogActionTypes.ERROR_LOG,
			payload: err.response.statusText
		});
	}






	// return async (dispatch) =>{
	// 	setLoading();

	// 	const res = await fetch('/logs');
	// 	const data = await res.json();

	// 	dispatch({
	// 		type: GET_LOGS,
	// 		payload: data
	// 	});
	// };
};



export const searchLogs = (text) => async dispatch =>{
	try {
		setLoading();
		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type:LogActionTypes.SEARCH_LOGS,
			payload: data
		});
	}catch(err){
		dispatch({
			type:LogActionTypes.ERROR_LOG,
			payload: err.response.statusText
		});
	}






	// return async (dispatch) =>{
	// 	setLoading();

	// 	const res = await fetch('/logs');
	// 	const data = await res.json();

	// 	dispatch({
	// 		type: GET_LOGS,
	// 		payload: data
	// 	});
	// };
};

 

export const clearCurrent = () => {
	return{
		type: LogActionTypes.CLEAR_CURRENT,
	}
}

export const setLoading = () => {
	return {
		type: LogActionTypes.SET_LOADING
	};
}