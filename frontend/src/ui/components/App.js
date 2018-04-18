import React from 'react';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import PrivateRoute from './route/PrivateRoute';
import Login from './login/Login';
import {history} from './history/history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <PrivateRoute exact path='/'><Login/></PrivateRoute>
          <PrivateRoute exact path='/first-component'><FirstComponent/></PrivateRoute>
          <PrivateRoute exact path='/second-component'><SecondComponent/></PrivateRoute>
          <PrivateRoute exact path='/third-component'><ThirdComponent/></PrivateRoute>
          <Route exact path='/login' component={Login}/>
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
