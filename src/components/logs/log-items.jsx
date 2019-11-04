import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';



const LogItem = ({ log }) => {

	// const onDelete = () =>{
	// 	const {deleteLog} = logContext;
	// 	deleteContact(id);
	// 		}

	return(
		<li className='collection-item'>
			<div>
				<a href ='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>
						Last updated by:{' '}{log.technican} on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
					</span>
				</span>
				<a href='!#' className='secondary-content'><i className="material-icons grey-text">delete</i></a>
			</div>
		</li>
	);
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired
}

export default LogItem;