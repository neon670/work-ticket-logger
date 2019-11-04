import React from 'react';
import PropTypes from 'prop-types';

const TechItem = (technicans) =>{
	return(
		<li className='collection-item'>
			<div>
				{technicans.firstName} {technicans.lastName}
				<a href='!#' className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);

	TechItem.propTypes = {
		technicans: PropTypes.object.isRequired,
	}
}

export default TechItem; 