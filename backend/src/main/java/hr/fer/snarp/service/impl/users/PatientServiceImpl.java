package hr.fer.snarp.service.impl.users;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.domain.users.patient.PatientRequest;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import hr.fer.snarp.enumeration.UserType;
import hr.fer.snarp.repository.PatientRepository;
import hr.fer.snarp.service.users.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    return getPatientResponses(Lists.newArrayList(this.patientRepository.findAll()));
  }

  @Override
  public PatientResponse getById(final Long id) {
    return getPatientResponse(this.patientRepository.findOne(id));
  }

  @Override
  public PatientResponse add(final PatientRequest patientRequest) {
    return getPatientResponse(this.patientRepository.save(new Patient(patientRequest)));
  }

  @Override
  public PatientResponse edit(final PatientRequest patientRequest) {
    final Patient patientFromDatabase = this.patientRepository.findOne(patientRequest.getId());

    patientFromDatabase.setFirstName(patientRequest.getFirstName());
    patientFromDatabase.setLastName(patientRequest.getLastName());
    patientFromDatabase.setMail(patientRequest.getMail());
    patientFromDatabase.setType(UserType.getByName(patientRequest.getType()));

    return getPatientResponse(this.patientRepository.save(patientFromDatabase));
  }

  @Override
  public PatientResponse editPassword(final PatientRequest patientRequest) {
    final Patient patientFromDatabase = this.patientRepository.findOne(patientRequest.getId());

    patientFromDatabase.setPassword(patientRequest.getPassword());

    return getPatientResponse(this.patientRepository.save(patientFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.patientRepository.delete(id);
  }

  private List<PatientResponse> getPatientResponses(final List<Patient> patients) {
    final List<PatientResponse> patientResponses = new ArrayList<>();

    for (final Patient patient : patients) {
      patientResponses.add(getPatientResponse(patient));
    }

    return patientResponses;
  }

  private PatientResponse getPatientResponse(final Patient patient) {
    return new PatientResponse(patient);
  }
}
