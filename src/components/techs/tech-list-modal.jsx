import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTechnicians } from '../../redux/technicians/tech-actions';
import TechItem from './tech-item';


const TechList = ({getTechnicians, technician: {technicians, loading }}) => {

	useEffect(() =>{
		getTechnicians();
		//eslint-disable-next-line
	}, []);

	
	// if(loading){
	// 	return <PreLoader />
	// }
	return(
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
			<h4>Technicians List</h4>
				<ul className='collection'>
					{!loading && technicians !== null  && technicians.map(technician => 
						<TechItem technicians={technician} key={technician.id} />
					)}
				</ul>
			</div>
		</div>
	);

}

TechList.propTypes = {
	technician: PropTypes.object.isRequired,
	getTechnicians: PropTypes.func.isRequired
}


const mapStateToProps = state =>({
	technician: state.technician
});

export default connect(mapStateToProps, { getTechnicians })(TechList);