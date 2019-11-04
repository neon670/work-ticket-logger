import React, { useState } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [technican, setTechnican] = useState('');

	const onSubmit = () => {
		if(message === '' || technican === ''){
			M.toast({html: ' Please enter a message and select technican'});
		}else{
			setMessage('');
			setTechnican('');
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
						<select name='technican' value={technican} className='browser-default' onChange={e => setTechnican(e.target.value)}>
							<option value=''>
							--Select Technican--
							</option>
							<option>Jon Sith</option>
							<option>Ton Smith</option>
							<option>Pon Mith</option>
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


export default AddLogModal;