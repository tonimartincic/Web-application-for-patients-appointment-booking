import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import PrivateRoute from './route/PrivateRoute';
import Login from './login/Login';

class App extends React.Component {
	render() {
		return (
			<Router>
        <div>
          <PrivateRoute exact path='/' component={FirstComponent} />
          <PrivateRoute path='/second-component' component={SecondComponent} />
          <PrivateRoute path='/third-component' component={ThirdComponent} />
          <Route exact path='/login' component={Login} />
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
