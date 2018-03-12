import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from './navigationBar/NavigationBar';

class FirstComponent extends React.Component {
	render() {
		return (
      <section>
        <NavigationBar/>
        <span>First component</span>
      </section>
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
