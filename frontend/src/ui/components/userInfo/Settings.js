import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MenuItem, NavDropdown} from 'react-bootstrap';
import UserData from './UserData';
import {setShowingUserData} from "../../../actions/showingUserDataActions";
import {withRouter} from 'react-router-dom';
import styles from './settings.css';

class Settings extends Component {
  logout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login');
  };

  render() {
    return (
      <section>
        <UserData/>
        <NavDropdown
          title={
            <span className={styles.span}>
              <span className='glyphicon glyphicon-cog'/> Postavke
            </span>
          }
          id='nav-dropdown'
        >
          <MenuItem onClick={() => {
            this.props.setShowingUserData(true);
          }}>
            <span className='glyphicon glyphicon-info-sign'/> &nbsp;&nbsp; Informacije
          </MenuItem>
          <MenuItem divider/>
          <MenuItem onClick={() => this.logout()}>
            <span className='glyphicon glyphicon-log-out'/> &nbsp;&nbsp; Odjava
          </MenuItem>
        </NavDropdown>
      </section>
    )
      ;
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowingUserData: (value) => dispatch(setShowingUserData(value)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
