import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../redux/logs/log-actions';

import M from 'materialize-css/dist/js/materialize.min.js';


const LogItem = ({ log, deleteLog }) => {
	const onDelete = () => {
		deleteLog(log.id);
		M.toast({html: `Log deleted`})
	}
	// const onDelete = () =>{
	// 	const {deleteLog} = logContext;
	// 	deleteContact(id);
	// 		}

	return(
		<li className='collection-item'>
			<div>
				<a href ='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>{log.message}</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>
						Last updated by:{' '}{log.technician} on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
					</span>
				</span>
				<a href='!#' className='secondary-content' onClick={onDelete}><i className="material-icons grey-text">delete</i></a>
			</div>
		</li>
	);
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired
}

export default connect(null, {deleteLog, setCurrent})(LogItem);
