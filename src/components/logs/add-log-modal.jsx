import React, { useState } from 'react';
import{ connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../redux/logs/log-actions';
import TechSelectOptions from '../techs/tech-select-options';

import M from "materialize-css";
import 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({addLog}) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [technician, setTechnician] = useState('');

	const onSubmit = () => {
		if(message === '' || technician === ''){
			M.toast({html: ' Please enter a message and select technician'});
		}else{

			const newLog ={
				message,
				attention,
				technician,
				date: new Date()
			}
			addLog(newLog);

			M.toast({html: `Log added by ${technician}`});

			
			setMessage('');
			setTechnician('');
			setAttention(false);
		}
	}

	return(
		<div id='add-log-modal' className='modal' style={{width:'75%', height:'75%'}}>
			<div className='modal-content'>
			<h4>Enter Work Item</h4>

				<div className='row'>
					<div className='input-field'>
						<input type= 'text' name= 'message' value = {message} onChange={e => setMessage(e.target.value)} />
						<label hmtlfor='message' className='active'>
							Log Message
						</label>
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

};

AddLogModal.propTypes = {
	addLog: PropTypes.func.isRequired
}


export default connect(null, {addLog})(AddLogModal);