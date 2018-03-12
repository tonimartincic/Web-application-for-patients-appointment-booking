import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from './navigationBar/NavigationBar';

class SecondComponent extends React.Component {
	render() {
		return (
		  <section>
        <NavigationBar/>
        <span>Second component</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SecondComponent);
