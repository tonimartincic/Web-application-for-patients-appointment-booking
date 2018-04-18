import {combineReducers} from 'redux';
import administratorsReducer from './administratorsReducer';
import departmentsReducer from "./departmentsReducer";
import generalPractitionersReducer from "./generalPractitionersReducer";
import hospitalsReducer from "./hospitalsReducer";
import medicalSpecialistsReducer from "./medicalSpecialistsReducer";
import patientsReducer from "./patientsReducer";
import referralsReducer from "./referralsReducer";
import usersReducer from "./usersReducer";
import userDataReducer from './userDataReducer';

const rootReducer = combineReducers({
  administrators: administratorsReducer,
  departments: departmentsReducer,
  generalPractitioners: generalPractitionersReducer,
  hospitals: hospitalsReducer,
  medicalSpecialists: medicalSpecialistsReducer,
  patients: patientsReducer,
  referrals: referralsReducer,
  users: usersReducer,
  userData: userDataReducer,
});

export default rootReducer;
