import React, { useState, useEffect } from 'react';
import './App.scss';

// import { <service_name> } from "./services/<service_type>/";

export default () => {
	// const [temp, setTemp] = useState("");
	useEffect(() => {
		// const init = async () => {
		// 	const response = await hello()
		// 	setTemp(response.data);
		// }
		// init();
  }, []);
	return (
		<div>
			<h1>React Hello</h1>
		</div>
	);
}
