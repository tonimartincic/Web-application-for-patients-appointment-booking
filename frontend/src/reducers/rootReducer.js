import {combineReducers} from 'redux';
import administratorsReducer from './users/administratorsReducer';
import departmentsReducer from "./departments/departmentsReducer";
import examinationsReducer from "./examinations/examinationsReducer";
import generalPractitionersReducer from "./users/generalPractitionersReducer";
import hospitalsReducer from "./hospitals/hospitalsReducer";
import medicalSpecialistsReducer from "./users/medicalSpecialistsReducer";
import patientsReducer from "./users/patientsReducer";
import referralsReducer from "./referrals/referralsReducer";
import userDataReducer from './userData/userDataReducer';
import referralTypesReducer from "./referrals/referralTypesReducer";
import departmentTypesReducer from "./departments/departmentTypesReducer";
import examinationStatusesReducer from "./examinations/examinationStatusesReducer";

const rootReducer = combineReducers({
  administrators: administratorsReducer,
  departments: departmentsReducer,
  examinations: examinationsReducer,
  generalPractitioners: generalPractitionersReducer,
  hospitals: hospitalsReducer,
  medicalSpecialists: medicalSpecialistsReducer,
  patients: patientsReducer,
  referrals: referralsReducer,
  userData: userDataReducer,
  referralTypes: referralTypesReducer,
  departmentTypes: departmentTypesReducer,
  examinationStatuses: examinationStatusesReducer,
});

export default rootReducer;
