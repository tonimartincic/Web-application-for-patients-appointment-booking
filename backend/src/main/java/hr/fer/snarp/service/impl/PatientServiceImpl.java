package hr.fer.snarp.service.impl;

import hr.fer.snarp.repository.PatientRepository;
import hr.fer.snarp.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {

  private final PatientRepository patientRepository;

  @Autowired
  public PatientServiceImpl(PatientRepository patientRepository) {
    this.patientRepository = patientRepository;
  }
}
