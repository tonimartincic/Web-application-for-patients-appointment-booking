package hr.fer.snarp.service.impl;

import hr.fer.snarp.domain.users.patient.PatientRequest;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import hr.fer.snarp.repository.PatientRepository;
import hr.fer.snarp.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

  private final PatientRepository patientRepository;

  @Autowired
  public PatientServiceImpl(final PatientRepository patientRepository) {
    this.patientRepository = patientRepository;
  }

  @Override
  public List<PatientResponse> getAll() {
    return null;
  }

  @Override
  public PatientResponse getById(final Long id) {
    return null;
  }

  @Override
  public PatientResponse add(final PatientRequest patientRequest) {
    return null;
  }

  @Override
  public PatientResponse edit(final PatientRequest patientRequest) {
    return null;
  }

  @Override
  public PatientResponse editPassword(final PatientRequest patientRequest) {
    return null;
  }

  @Override
  public void deleteById(final Long id) {

  }
}
