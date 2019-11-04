import TechActionTypes from './tech-types';



export const getTechnicians = () => async dispatch =>{
	try {
		setLoading();
		const res = await fetch('/technicians');
		const data = await res.json();

		dispatch({
			type:TechActionTypes.GET_TECHS,
			payload: data
		});
	}catch(err){
		dispatch({
			type:TechActionTypes.TECHS_ERROR,
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


export const addTechnician = (technician) => async dispatch =>{
	try {
		setLoading();
		const res = await fetch('/technicians', {
			method: 'POST',
			body:JSON.stringify(technician),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type:TechActionTypes.ADD_TECH,
			payload: data,
		});
	}catch(err){
		dispatch({
			type:TechActionTypes.TECH_ERROR,
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

export const deleteTechnician = (id) => async dispatch =>{
	try {
		setLoading();
		await fetch(`/technicians/${id}`,{
			method: 'DELETE'
		});


		dispatch({
			type:TechActionTypes.DELETE_TECH,
			payload: id
		});
	}catch(err){
		dispatch({
			type:TechActionTypes.TECH_ERROR,
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




export const setLoading = () => {
	return {
		type: TechActionTypes.SET_LOADING
	};
}

