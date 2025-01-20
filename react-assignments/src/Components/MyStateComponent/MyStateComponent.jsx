import React, { useState } from "react";

const MyStateComponent = () => {
	// TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
	const [name, setName] = useState("John");
	const [age, setAge] = useState(10);


	return (
		<div>
			<h1>My State Component</h1>
			<form action="">
				<input type="text" placeholder="Name" onChange={setName} />
				<input type="number" placeholder="Age" onChange={setAge} />
			</form>
		</div>
	);
};

export default MyStateComponent;
