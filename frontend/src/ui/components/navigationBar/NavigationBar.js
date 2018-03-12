import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './navigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className={styles.navBar}>
        <Navbar.Header className={styles.navCenter}>
          <Navbar.Brand>
            <Link to='/'>
              <span className={styles.spanEureka}>
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
              First Component
            </NavItem>
            <NavItem
              componentClass={Link}
              to='/second-component'
              href='/second-component'
            >
             Second component
            </NavItem>
            <NavItem
              componentClass={Link}
              to='/third-component'
              href='/third-component'
            >
             Third component
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
