import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../../navigationBar/NavigationBar';

class GeneralPractitioners extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar/>
        <span>GeneralPractitioners</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPractitioners);
