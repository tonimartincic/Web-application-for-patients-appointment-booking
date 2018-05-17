import React from 'react';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import Administrators from './users/administrators/Administrators';
import GeneralPractitioners from './users/generalPractitioners/GeneralPractitioners';
import MedicalSpecialists from './users/medicalSpecialists/MedicalSpecialists';
import Patients from './users/patients/Patients';
import Hospitals from './hospitals/Hospitals';
import Referrals from './referrals/Referrals';
import PrivateRoute from './route/PrivateRoute';
import Login from './login/Login';
import {history} from './history/history';
import fetchUserData from '../../actionCreators/userData/userDataActionCreators';
import fetchAdministrators from '../../actionCreators/users/administratorsActionCreators';
import fetchGeneralPractitioners from '../../actionCreators/users/generalPractitionersActionCreators';
import fetchMedicalSpecialists from '../../actionCreators/users/medicalSpecialistsActionCreators';
import fetchPatients from '../../actionCreators/users/patientsActionCreators';
import fetchDepartments from '../../actionCreators/departments/departmentsActionCreators';
import fetchHospitals from '../../actionCreators/hospitals/hospitalsActionCreators';
import fetchReferrals from '../../actionCreators/referrals/referralsActionCreators';
import fetchReferralTypes from '../../actionCreators/referrals/referralTypesActionCreators';
import fetchDepartmentTypes from '../../actionCreators/departments/departmentTypesActionCreators';
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
      .then(() => this.props.fetchReferrals())
      .then(() => this.props.fetchReferralTypes())
      .then(() => this.props.fetchDepartmentTypes());
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
          <PrivateRoute exact path='/referrals'><Referrals/></PrivateRoute>
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
    fetchReferralTypes: () => dispatch(fetchReferralTypes()),
    fetchDepartmentTypes: () => dispatch(fetchDepartmentTypes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
