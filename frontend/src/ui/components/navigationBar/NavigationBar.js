import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './navigationBar.css';
import Settings from '../userInfo/Settings';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className={styles.navBar}>
        <Navbar.Header className={styles.navCenter}>
          <Navbar.Brand>
            <Link to='/'>
              <span className={styles.spanSnarp}>
                Snarp
              </span>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className={styles.navCenter}>
          <NavItem
            componentClass={Link}
            to='/'
            href='/'
          >
            <span className={styles.span}>First Component</span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/second-component'
            href='/second-component'
          >
            <span className={styles.span}>Second component</span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/third-component'
            href='/third-component'
          >
            <span className={styles.span}>Third component</span>
          </NavItem>
          <NavItem>
            <Settings/>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
