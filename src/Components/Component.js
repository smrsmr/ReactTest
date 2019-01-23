import React from 'react';
//定义组件
export function Welcome(prop) {
	return (
		<div className="App">
			<h1>Hello,{prop.name}</h1>
		</div>
	)
}
function formData(date) {
	return date.toLocaleDateString()
}
export function Comment(prop) {
	return (
		<div className="App">
			<img src={prop.logo} alt="logo" />
			<div>
				<h1>Hello,{prop.name}</h1>
				<p>{prop.text}</p>
			</div>
			{formData(prop.date)}
		</div>
	)
}
