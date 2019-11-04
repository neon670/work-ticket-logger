import React, { useState, useEffect } from 'react';
import TechItem from './tech-item';


const TechList = () => {
	const [technicans, setTechnicans] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() =>{
		getTechnicans();
		//eslint-disable-next-line
	}, []);

	const getTechnicans = async () => {
		setLoading(true);
		const res = await fetch('/logs');
		const data = await res.json();

		setTechnicans(data);
		setLoading(false);
	}
	// if(loading){
	// 	return <PreLoader />
	// }
	return(
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
			<h4>Technician List</h4>
				<ul className='collection'>
					{!loading && technicans.map(technicans => (
						<TechItem technicans={technicans} key={technicans.id} />
					))}
				</ul>
			</div>
		</div>
	);

}

export default TechList;