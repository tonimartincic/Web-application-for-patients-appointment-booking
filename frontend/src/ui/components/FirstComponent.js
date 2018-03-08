import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
	render() {
		return (
			<span>First component</span>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstComponent);