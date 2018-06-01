import {combineReducers} from 'redux';
import administratorsReducer from './users/administratorsReducer';
import departmentsReducer from "./departments/departmentsReducer";
import generalPractitionersReducer from "./users/generalPractitionersReducer";
import hospitalsReducer from "./hospitals/hospitalsReducer";
import medicalSpecialistsReducer from "./users/medicalSpecialistsReducer";
import patientsReducer from "./users/patientsReducer";
import referralsReducer from "./referrals/referralsReducer";
import userDataReducer from './userData/userDataReducer';
import referralTypesReducer from "./referrals/referralTypesReducer";
import departmentTypesReducer from "./departments/departmentTypesReducer";

const rootReducer = combineReducers({
  administrators: administratorsReducer,
  departments: departmentsReducer,
  generalPractitioners: generalPractitionersReducer,
  hospitals: hospitalsReducer,
  medicalSpecialists: medicalSpecialistsReducer,
  patients: patientsReducer,
  referrals: referralsReducer,
  userData: userDataReducer,
  referralTypes: referralTypesReducer,
  departmentTypes: departmentTypesReducer,
});

export default rootReducer;
