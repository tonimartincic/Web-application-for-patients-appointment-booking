import React from 'react';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import Administrators from './users/administrators/Administrators';
import GeneralPractitioners from './users/generalPractitioners/GeneralPractitioners';
import MedicalSpecialists from './users/medicalSpecialists/MedicalSpecialists';
import Patients from './users/patients/Patients';
import Hospitals from './hospitals/Hospitals';
import PrivateRoute from './route/PrivateRoute';
import Login from './login/Login';
import {history} from './history/history';
import fetchUserData from '../../actionCreators/userDataActionCreators';
import fetchAdministrators from '../../actionCreators/administratorsActionCreators';
import fetchGeneralPractitioners from '../../actionCreators/generalPractitionersActionCreators';
import fetchMedicalSpecialists from '../../actionCreators/medicalSpecialistsActionCreators';
import fetchPatients from '../../actionCreators/patientsActionCreators';
import fetchDepartments from '../../actionCreators/departmentsActionCreators';
import fetchHospitals from '../../actionCreators/hospitalsActionCreators';
import fetchReferrals from '../../actionCreators/referralsActionCreators';
import styles from './app.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUserData()
      .then(() => this.props.fetchAdministrators())
      .then(() => this.props.fetchGeneralPractitioners())
      .then(() => this.props.fetchMedicalSpecialists())
      .then(() => this.props.fetchPatients())
      .then(() => this.props.fetchDepartments())
      .then(() => this.props.fetchHospitals())
      .then(() => this.props.fetchReferrals());
  }

  render() {
    return (
      <Router history={history}>
        <section className={styles.section}>
          <PrivateRoute exact path='/'><Administrators/></PrivateRoute>
          <PrivateRoute exact path='/administrators'><Administrators/></PrivateRoute>
          <PrivateRoute exact path='/general-practitioners'><GeneralPractitioners/></PrivateRoute>
          <PrivateRoute exact path='/medical-specialists'><MedicalSpecialists/></PrivateRoute>
          <PrivateRoute exact path='/patients'><Patients/></PrivateRoute>
          <PrivateRoute exact path='/hospitals'><Hospitals/></PrivateRoute>
          <Route exact path='/login' component={Login}/>
        </section>
      </Router>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserData: () => dispatch(fetchUserData()),
    fetchAdministrators: () => dispatch(fetchAdministrators()),
    fetchGeneralPractitioners: () => dispatch(fetchGeneralPractitioners()),
    fetchMedicalSpecialists: () => dispatch(fetchMedicalSpecialists()),
    fetchPatients: () => dispatch(fetchPatients()),
    fetchDepartments: () => dispatch(fetchDepartments()),
    fetchHospitals: () => dispatch(fetchHospitals()),
    fetchReferrals: () => dispatch(fetchReferrals()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
