import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MenuItem, NavDropdown} from 'react-bootstrap';
import UserInfo from './userInfo/UserInfo';
import ChangePassword from './changePassword/ChangePassword';
import {withRouter} from 'react-router-dom';
import styles from './settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserInfoClicked: false,
      changePasswordClicked: false,
    };

    this.setShowUserInfoClicked = this.setShowUserInfoClicked.bind(this);
    this.setChangePasswordClicked = this.setChangePasswordClicked.bind(this);
  }

  setShowUserInfoClicked = value =>
    this.setState({
      showUserInfoClicked: value,
    });

  setChangePasswordClicked = value =>
    this.setState({
      changePasswordClicked: value,
    });

  logout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login');
  };

  render() {
    return (
      <section>
        <NavDropdown
          title={
            <span className={styles.span}>
              <span className='glyphicon glyphicon-cog'/> Postavke
            </span>
          }
          id='nav-dropdown'
        >
          <MenuItem onClick={() => {
            this.setShowUserInfoClicked(true);
          }}>
            <span className={styles.spanMenuItem}>
              <span className='glyphicon glyphicon-info-sign'/> &nbsp;&nbsp; O meni
            </span>
          </MenuItem>
          <MenuItem divider/>
          <MenuItem onClick={() => {
            this.setChangePasswordClicked(true);
          }}>
            <span className={styles.spanMenuItem}>
              <span className='glyphicon glyphicon-eye-close'/> &nbsp;&nbsp; Promijeni lozinku
            </span>
          </MenuItem>
          <MenuItem divider/>
          <MenuItem onClick={() => this.logout()}>
            <span className={styles.spanMenuItem}>
              <span className='glyphicon glyphicon-log-out'/> &nbsp;&nbsp; Odjava
            </span>
          </MenuItem>
        </NavDropdown>
        <UserInfo
          showUserInfoClicked={this.state.showUserInfoClicked}
          setShowUserInfoClicked={value => this.setShowUserInfoClicked(value)}
        />
        <ChangePassword
          changePasswordClicked={this.state.changePasswordClicked}
          setChangePasswordClicked={value => this.setChangePasswordClicked(value)}
        />
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

function mapDispatchToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
