import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './navigationBar.css';
import Settings from '../settings/Settings';
import {history} from '../history/history';

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
          <NavDropdown
            title={
              <span className={styles.span}>
                  <span className='glyphicon glyphicon-user'/> Korisnici
                </span>
            }
            id='nav-dropdown'
          >
            <MenuItem onClick={() => {
              history.push('/administrators');
            }}>
              <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Administratori
            </MenuItem>
            <MenuItem divider/>
            <MenuItem onClick={() => {
              history.push('/general-practitioners');
            }}
            >
              <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Specijalisti obiteljske medicine
            </MenuItem>
            <MenuItem divider/>
            <MenuItem onClick={() => {
              history.push('/medical-specialists');
            }}
            >
              <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Liječnici specijalisti
            </MenuItem>
            <MenuItem divider/>
            <MenuItem onClick={() => {
              history.push('/patients');
            }}
            >
              <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Pacijenti
            </MenuItem>
          </NavDropdown>
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
