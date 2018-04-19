import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../../navigationBar/NavigationBar';

class MedicalSpecialists extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar/>
        <span>MedicalSpecialists</span>
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
