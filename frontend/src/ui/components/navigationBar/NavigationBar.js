import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './navigationBar.css';
import Settings from '../userInfo/Settings';

class NavigationBar extends Component {
  render() {
    return (
      <section className={styles.section}>
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
              <span className={styles.span}>
                <span className='glyphicon glyphicon-user'/> Administratori
              </span>
            </NavItem>
            <NavItem
              componentClass={Link}
              to='/general-practitioners'
              href='/general-practitioners'
            >
              <span className={styles.span}>
                <span className='glyphicon glyphicon-user'/> Specijalisti obiteljske medicine
              </span>
            </NavItem>
            <NavItem
              componentClass={Link}
              to='/medical-specialists'
              href='/medical-specialists'
            >
              <span className={styles.span}>
                <span className='glyphicon glyphicon-user'/> Liječnici specijalisti
              </span>
            </NavItem>
            <NavItem
              componentClass={Link}
              to='/patients'
              href='/patients'
            >
              <span className={styles.span}>
                <span className='glyphicon glyphicon-user'/> Pacijenti
              </span>
            </NavItem>
            <NavItem
              componentClass={Link}
              to='/hospitals'
              href='/hospitals'
            >
              <span className={styles.span}>
                <span className='glyphicon glyphicon-header'/> Bolnice
              </span>
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
      </section>
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
