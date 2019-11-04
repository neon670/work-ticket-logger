import TechActionTypes from './tech-types';

const initalState ={
	technicians: null,
	loading: false,
	error: null
}


export default(state = initalState, action) =>{
	switch (action.type){
		case TechActionTypes.GET_TECHS:
			return{
				...state,
				technicians: action.payload,
				loading: false
			};
		case TechActionTypes.ADD_TECH:
			return{
				...state,
				technicians: [ ...state.technicians, action.payload],
				loading: false
			};
		case TechActionTypes.DELETE_TECH:
			return{
				...state,
				technicians: state.technicians.filter(technician => technician.id !== action.payload),
				loading: false
			};
		case TechActionTypes.SET_LOADING:
			return {
				...state,
				loading: true
			};
		case TechActionTypes.TECH_ERROR:
			return{
				...state,
				error: action.payload,
				loading: false
			}
		default:
		return state;
	}

}