import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './navigationBar/NavigationBar';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

class App extends React.Component {
	render() {
		return (
			<Router>
        <div>
          <div>
            <NavigationBar />
          </div>
          <Route exact path='/' component={FirstComponent} />
          <Route path='/second-component' component={SecondComponent} />
          <Route path='/third-component' component={ThirdComponent} />
        </div>
			</Router>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
