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
            to='/administrators'
            href='/administrators'
          >
            <span className={styles.span}>Administratori</span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/general-practitioners'
            href='/general-practitioners'
          >
            <span className={styles.span}>Liječnici opće prakse</span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/medical-specialists'
            href='/medical-specialists'
          >
            <span className={styles.span}>Liječnici specijalisti</span>
          </NavItem>
          <NavItem
            componentClass={Link}
            to='/patients'
            href='/patients'
          >
            <span className={styles.span}>Pacijenti</span>
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
