import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTechnician } from '../../redux/technicians/tech-actions';



import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTechnician }) => {
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	

	const onSubmit = () => {
		if(firstName === '' || lastName === ''){
			M.toast({html: ' Please enter a name for the technician '});
		}else{
			addTechnician({
				firstName,
				lastName
			});
			M.toast({html:  `New technician added ${firstName} ${lastName}` });


			setfirstName('');
			setlastName('');
		}
	}

	return(
		<div id='add-tech-modal' className='modal' style={{width:'75%', height:'75%'}}>
			<div className='modal-content'>
			<h4>Add New Technician</h4>

				<div className='row'>
					<div className='input-field'>
						<input type= 'text' name= 'firstName' value = {firstName} onChange={e => setfirstName(e.target.value)} />
						<label hmtlfor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input type= 'text' name= 'lastName' value = {lastName} onChange={e => setlastName(e.target.value)} />
						<label hmtlfor='lastName' className='active'>
							First Name
						</label>
					</div>
				</div>
				
			</div>
			<div className='modal-footer'>
				<a href='!#' onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>Enter</a>
			</div> 
		</div>
	)

}

AddTechModal.propTypes = {
	addTechnician: PropTypes.func.isRequired
}


export default connect(null,{ addTechnician })(AddTechModal);