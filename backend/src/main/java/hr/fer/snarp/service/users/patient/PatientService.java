package hr.fer.snarp.service.users.patient;

import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.domain.users.patient.PatientRequest;
import hr.fer.snarp.domain.users.patient.PatientResponse;

import java.util.List;

public interface PatientService {

  List<PatientResponse> getAll();

  PatientResponse getById(Long id);

  PatientResponse add(PatientRequest patientRequest);

  PatientResponse edit(PatientRequest patientRequest);

  void deleteById(Long id);

  Patient getByMailAndPassword(String mail, String password);
}
