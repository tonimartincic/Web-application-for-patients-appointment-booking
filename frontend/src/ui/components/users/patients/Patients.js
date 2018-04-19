import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';

class Patients extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar/>
        <span>Patients</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Patients);
