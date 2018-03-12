package hr.fer.snarp.service;

import hr.fer.snarp.domain.users.patient.PatientRequest;
import hr.fer.snarp.domain.users.patient.PatientResponse;

import java.util.List;

public interface PatientService {

  List<PatientResponse> getAll();

  PatientResponse getById(Long id);

  PatientResponse add(PatientRequest patientRequest);

  PatientResponse edit(PatientRequest patientRequest);

  PatientResponse editPassword(PatientRequest patientRequest);

  void deleteById(Long id);
}
