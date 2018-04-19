import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';
import styles from './administrators.css';

class Administrators extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <NavigationBar/>
        <span>Administrators</span>
        <Footer/>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrators);
