import React, { useState, useEffect } from 'react';
import './App.scss';

import { hello } from "./services/auth/";

export default () => {
	const [temp, setTemp] = useState("");
	useEffect(() => {
    // fetch(`/api/`).then(res => res.json()).then(json => setTemp(json.data));
		const init = async () => {
			const response = await hello()
			setTemp(response.data);
		}
		init();
  }, []);
	return (
		<div>
			<h1>Hello Universe!!! {temp}</h1>
		</div>
	);
}
