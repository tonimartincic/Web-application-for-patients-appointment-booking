package hr.fer.snarp.service.impl.users;

import hr.fer.snarp.domain.users.administrator.Administrator;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.service.users.AdministratorService;
import hr.fer.snarp.service.users.GeneralPractitionerService;
import hr.fer.snarp.service.users.MedicalSpecialistService;
import hr.fer.snarp.service.users.PatientService;
import hr.fer.snarp.service.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  private final AdministratorService administratorService;

  private final GeneralPractitionerService generalPractitionerService;

  private final MedicalSpecialistService medicalSpecialistService;

  private final PatientService patientService;

  @Autowired
  public UserServiceImpl(
    final AdministratorService administratorService,
    final GeneralPractitionerService generalPractitionerService,
    final MedicalSpecialistService medicalSpecialistService,
    final PatientService patientService) {

    this.administratorService = administratorService;
    this.generalPractitionerService = generalPractitionerService;
    this.medicalSpecialistService = medicalSpecialistService;
    this.patientService = patientService;
  }

  @Override
  public UserResponse validateUser(final String mail, final String password) {
    final Administrator administrator = this.administratorService.getByMailAndPassword(mail, password);
    if (administrator != null) {
      return new AdministratorResponse(administrator);
    }

    final GeneralPractitioner generalPractitioner = this.generalPractitionerService.getByMailAndPassword(mail, password);
    if (generalPractitioner != null) {
      return new GeneralPractitionerResponse(generalPractitioner);
    }

    final MedicalSpecialist medicalSpecialist = this.medicalSpecialistService.getByMailAndPassword(mail, password);
    if (medicalSpecialist != null) {
      return new MedicalSpecialistResponse(medicalSpecialist);
    }

    final Patient patient = this.patientService.getByMailAndPassword(mail, password);
    if (patient != null) {
      return new PatientResponse(patient);
    }

    return null;
  }
}
