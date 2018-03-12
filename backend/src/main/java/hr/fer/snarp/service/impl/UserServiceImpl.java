package hr.fer.snarp.service.impl;

import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.repository.AdministratorRepository;
import hr.fer.snarp.repository.GeneralPractitionerRepository;
import hr.fer.snarp.repository.MedicalSpecialistRepository;
import hr.fer.snarp.repository.PatientRepository;
import hr.fer.snarp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  private final AdministratorRepository administratorRepository;

  private final GeneralPractitionerRepository generalPractitionerRepository;

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  private final PatientRepository patientRepository;

  @Autowired
  public UserServiceImpl(
    AdministratorRepository administratorRepository,
    GeneralPractitionerRepository generalPractitionerRepository,
    MedicalSpecialistRepository medicalSpecialistRepository,
    PatientRepository patientRepository) {

    this.administratorRepository = administratorRepository;
    this.generalPractitionerRepository = generalPractitionerRepository;
    this.medicalSpecialistRepository = medicalSpecialistRepository;
    this.patientRepository = patientRepository;
  }

  @Override
  public UserResponse validateUser(String mail, String password) {
    return null;
  }
}
