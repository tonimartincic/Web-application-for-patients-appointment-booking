package hr.fer.snarp.service.impl.users;

import hr.fer.snarp.domain.users.administrator.Administrator;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import hr.fer.snarp.domain.users.user.UserRequest;
import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.enumeration.UserType;
import hr.fer.snarp.repository.users.AdministratorRepository;
import hr.fer.snarp.repository.users.GeneralPractitionerRepository;
import hr.fer.snarp.repository.users.MedicalSpecialistRepository;
import hr.fer.snarp.repository.users.PatientRepository;
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

  private final AdministratorRepository administratorRepository;

  private final GeneralPractitionerRepository generalPractitionerRepository;

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  private final PatientRepository patientRepository;

  @Autowired
  public UserServiceImpl(
    final AdministratorService administratorService,
    final GeneralPractitionerService generalPractitionerService,
    final MedicalSpecialistService medicalSpecialistService,
    final PatientService patientService,
    final AdministratorRepository administratorRepository,
    final GeneralPractitionerRepository generalPractitionerRepository,
    final MedicalSpecialistRepository medicalSpecialistRepository,
    final PatientRepository patientRepository) {

    this.administratorService = administratorService;
    this.generalPractitionerService = generalPractitionerService;
    this.medicalSpecialistService = medicalSpecialistService;
    this.patientService = patientService;
    this.administratorRepository = administratorRepository;
    this.generalPractitionerRepository = generalPractitionerRepository;
    this.medicalSpecialistRepository = medicalSpecialistRepository;
    this.patientRepository = patientRepository;
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

  @Override
  public UserResponse getUser(final Long id, final String type) {
    final UserType userType = UserType.getByName(type);

    switch (userType) {
      case ADMINISTRATOR:
        return this.administratorService.getById(id);

      case PATIENT:
        return this.patientService.getById(id);

      case MEDICAL_SPECIALIST:
        return this.medicalSpecialistService.getById(id);

      case GENERAL_PRACTITIONER:
        return this.generalPractitionerService.getById(id);

      default:
        return null;
    }
  }

  @Override
  public UserResponse changePassword(final UserRequest userRequest) {
    final UserType userType = UserType.getByName(userRequest.getType());

    switch (userType) {
      case ADMINISTRATOR:
        final Administrator administratorFromDatabase = this.administratorRepository.findOne(userRequest.getId());
        administratorFromDatabase.setPassword(userRequest.getPassword());
        return AdministratorServiceImpl.getAdministratorResponse(this.administratorRepository.save(administratorFromDatabase));

      case PATIENT:
        final Patient patientFromDatabase = this.patientRepository.findOne(userRequest.getId());
        patientFromDatabase.setPassword(userRequest.getPassword());
        return PatientServiceImpl.getPatientResponse(this.patientRepository.save(patientFromDatabase));

      case MEDICAL_SPECIALIST:
        final MedicalSpecialist medicalSpecialistFromDatabase = this.medicalSpecialistRepository.findOne(userRequest.getId());
        medicalSpecialistFromDatabase.setPassword(userRequest.getPassword());
        return MedicalSpecialistServiceImpl.getMedicalSpecialistResponse(this.medicalSpecialistRepository.save(medicalSpecialistFromDatabase));

      case GENERAL_PRACTITIONER:
        final GeneralPractitioner generalPractitionerFromDatabase = this.generalPractitionerRepository.findOne(userRequest.getId());
        generalPractitionerFromDatabase.setPassword(userRequest.getPassword());
        return GeneralPractitionerServiceImpl.getGeneralPractitionerResponse(this.generalPractitionerRepository.save(generalPractitionerFromDatabase));

      default:
        return null;
    }
  }
}
