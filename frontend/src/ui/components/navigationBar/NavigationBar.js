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
            <section className={styles.sectionTitle}>
              <span className={styles.letter} data-letter="S">S</span>
              <span className={styles.letter} data-letter="N">N</span>
              <span className={styles.letter} data-letter="A">A</span>
              <span className={styles.letter} data-letter="R">R</span>
              <span className={styles.letter} data-letter="P">P</span>
            </section>
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
          <NavItem>
            <span className={styles.spanNoHover}>
               <span
                 className='glyphicon glyphicon-user'/> {this.props.userData.firstName + ' ' + this.props.userData.lastName}
            </span>
          </NavItem>
        </Nav>
      </Navbar>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
