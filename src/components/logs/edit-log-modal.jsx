import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../redux/logs/log-actions';
import TechSelectOptions from '../techs/tech-select-options';


import M from "materialize-css";
import 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({current, updateLog}) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [technician, setTechnician] = useState('');


	useEffect(()=>{
		if(current){
			setMessage(current.message);
			setAttention(current.attention);
			setTechnician(current.technician);
		}
	},[current]);

	const onSubmit = () => {
		if(message === '' || technician === ''){
			M.toast({html: ' Please enter a message and select technician'});
		}else{
			const updateLog = {
				id: current.id,
				message,
				attention,
				technician,
				date: new Date()
			}
			updateLog();
			M.toast({html: `Updated log`});

			setMessage('');
			setTechnician('');
			setAttention(false);
		}
	}

	return(
		<div id='edit-log-modal' className='modal' style={{width:'75%', height:'75%'}}>
			<div className='modal-content'>
			<h4>Enter Log</h4>

				<div className='row'>
					<div className='input-field'>
						<input type= 'text' name= 'message' value = {message} onChange={e => setMessage(e.target.value)} />
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<select name='technician' value={technician} className='browser-default' onChange={e => setTechnician(e.target.value)}>
							<option value=''>
							--Select Technician--
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={e => setAttention(e.target.value)} />
								<span>Priority</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a href='!#' onClick={onSubmit} className='modal-close btn waves-effect blue'>Enter</a>
			</div> 
		</div>
	)

}

EditLogModal.propTypes ={
	current: PropTypes.object,
	updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
	current: state.log.current
})


export default connect(mapStateToProps,{updateLog})(EditLogModal);
