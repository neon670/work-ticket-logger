import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTechnician } from '../../redux/technicians/tech-actions'; 

import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ technicians:{id, firstName, lastName}, deleteTechnician}) =>{
	const onDelete = () =>{
		deleteTechnician(id);
		M.toast({html: `${firstName} ${lastName} delete`});
	}



	return(
		<li className='collection-item'>
			<div>
				{firstName} {lastName}
				<a href='!#' className='secondary-content' onClick={onDelete}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
}


	TechItem.propTypes = {
		technicians: PropTypes.object.isRequired,
		deleteTechnician: PropTypes.func.isRequired
	}

export default connect(null, { deleteTechnician })(TechItem); 