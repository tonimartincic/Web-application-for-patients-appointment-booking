import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';

class MedicalSpecialists extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar/>
        <span>MedicalSpecialists</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalSpecialists);
