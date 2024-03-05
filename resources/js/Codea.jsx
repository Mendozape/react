//import React from 'react';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import axios from 'axios';
//export default function Codea() {
const UserCount = () => {
	const [userCount, setUserCount] = useState(0);
	useEffect(() => {
		axios.get('/api/users/count')
			.then(response => {
				setUserCount(response.data.count);
			})
			.catch(error => {
				console.error('Error fetching user count: ', error);
			});
	}, []);
	return (
		<>
			<section className="section" align="center">
				<div className="section-header" align="center">
					<h1>Dashboard:{userCount}</h1>
				</div>
				
			</section>
		</>

	);
};
export default UserCount;

//}
if (document.getElementById('codeareact')) {
	createRoot(document.getElementById('codeareact')).render(<UserCount />)
}
