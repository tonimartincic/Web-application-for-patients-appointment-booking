import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './navigationBar.css';
import Settings from '../settings/Settings';
import {history} from '../history/history';
import * as constants from '../../../constants/values';

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
          <Choose>
            <When condition={this.props.userData.type === constants.ADMINISTRATOR}>
              <NavDropdown
                title={
                  <span className={styles.span}>
                    <span className='glyphicon glyphicon-user'/> &nbsp;Korisnici
                  </span>
                }
                id='nav-dropdown'
              >
                <MenuItem onClick={() => {
                  history.push('/administrators');
                }}>
                  <span className={styles.spanMenuItem}>
                    <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Administratori
                  </span>
                </MenuItem>
                <MenuItem divider/>
                <MenuItem onClick={() => {
                  history.push('/general-practitioners');
                }}
                >
                  <span className={styles.spanMenuItem}>
                    <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Specijalisti obiteljske medicine
                  </span>
                </MenuItem>
                <MenuItem divider/>
                <MenuItem onClick={() => {
                  history.push('/medical-specialists');
                }}
                >
                  <span className={styles.spanMenuItem}>
                    <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Liječnici specijalisti
                  </span>
                </MenuItem>
                <MenuItem divider/>
                <MenuItem onClick={() => {
                  history.push('/patients');
                }}
                >
                  <span className={styles.spanMenuItem}>
                    <span className='glyphicon glyphicon-user'/> &nbsp;&nbsp; Pacijenti
                  </span>
                </MenuItem>
              </NavDropdown>
              <NavItem
                componentClass={Link}
                to='/hospitals'
                href='/hospitals'
              >
                  <span className={styles.span}>
                    <span className='glyphicon glyphicon-header'/> &nbsp;Bolnice
                  </span>
              </NavItem>
            </When>
          </Choose>
          <Choose>
            <When condition={this.props.userData.type === constants.GENERAL_PRACTITIONER}>
              <NavItem
                componentClass={Link}
                to='/patients'
                href='/patients'
              >
                  <span className={styles.span}>
                    <span className='glyphicon glyphicon-user'/> &nbsp;Pacijenti
                  </span>
              </NavItem>
            </When>
          </Choose>
          <Choose>
            <When condition={this.props.userData.type === constants.PATIENT}>
              <NavItem
                componentClass={Link}
                to='/examinationOrdering'
                href='/examinationOrdering'
              >
                  <span className={styles.span}>
                    <span className='glyphicon glyphicon-plus'/> &nbsp;Naručivanje
                  </span>
              </NavItem>
            </When>
          </Choose>
          <Choose>
            <When condition={this.props.userData.type === constants.PATIENT || this.props.userData.type === constants.MEDICAL_SPECIALIST}>
              <NavItem
                componentClass={Link}
                to='/examinations'
                href='/examinations'
              >
                  <span className={styles.span}>
                    <span className='glyphicon glyphicon-th-list'/> &nbsp;Pregledi
                  </span>
              </NavItem>
            </When>
          </Choose>
          <Choose>
            <When condition={this.props.userData.type !== constants.ADMINISTRATOR}>
              <NavItem
                componentClass={Link}
                to='/referrals'
                href='/referrals'
              >
                  <span className={styles.span}>
                    <span className='glyphicon glyphicon-folder-open'/> &nbsp;Uputnice
                  </span>
              </NavItem>
            </When>
          </Choose>
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
