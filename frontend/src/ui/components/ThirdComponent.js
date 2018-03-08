import React from 'react';
import { connect } from 'react-redux';

class ThirdComponent extends React.Component {
	render() {
		return (
			<span>Third component</span>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdComponent);