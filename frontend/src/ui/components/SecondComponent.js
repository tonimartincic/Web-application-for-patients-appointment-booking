import React from 'react';
import { connect } from 'react-redux';

class SecondComponent extends React.Component {
	render() {
		return (
			<span>Second component</span>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondComponent);