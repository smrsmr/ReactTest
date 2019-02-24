import React, { Component } from 'react';
class Mail extends Component {
	state = {
		ID: null
	}
	componentWillMount() {
		this.setState({
			ID: this.props.match.params.id
		})
	}
	renderDetail(pageType) {
		let dynamicDetail = require(`./${pageType}`).default;
		return dynamicDetail
	}
	render() {
		const pageType = this.props.match.params.id; 
		let DynamicDetail = this.renderDetail(pageType); 
		return (
			<div>
				<DynamicDetail />
			</div>
		);
	}
}

export default Mail;