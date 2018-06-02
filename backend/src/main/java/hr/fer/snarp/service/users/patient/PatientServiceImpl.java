package hr.fer.snarp.service.users.patient;

import com.google.common.collect.Lists;
import hr.fer.snarp.constants.UserConstants;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.domain.users.patient.PatientRequest;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import hr.fer.snarp.repository.users.PatientRepository;
import hr.fer.snarp.service.addressData.AddressDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

  private final PatientRepository patientRepository;

  private final AddressDataService addressDataService;

  @Autowired
  public PatientServiceImpl(final PatientRepository patientRepository, final AddressDataService addressDataService) {
    this.patientRepository = patientRepository;
    this.addressDataService = addressDataService;
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
    patientRequest.setPassword(UserConstants.DEFAULT_PASSWORD);

    final Patient patient = new Patient(patientRequest);
    final AddressData addressData =
      this.addressDataService.add(
        new AddressData(
          patientRequest.getCity(),
          patientRequest.getPostalCode(),
          patientRequest.getStreet(),
          patientRequest.getStreetNumber()
        )
      );

    patient.setAddressData(addressData);

    return getPatientResponse(this.patientRepository.save(patient));
  }

  @Override
  public PatientResponse edit(final PatientRequest patientRequest) {
    final Patient patientFromDatabase = this.patientRepository.findOne(patientRequest.getId());

    patientFromDatabase.setFirstName(patientRequest.getFirstName());
    patientFromDatabase.setLastName(patientRequest.getLastName());
    patientFromDatabase.setMail(patientRequest.getMail());
    patientFromDatabase.setPhoneNumber(patientRequest.getPhoneNumber());
    patientFromDatabase.setOIB(patientRequest.getOIB());
    patientFromDatabase.setDateOfBirth(patientRequest.getDateOfBirth());
    patientFromDatabase.setSex(patientRequest.getSex());

    final AddressData addressData =
      this.addressDataService.add(
        new AddressData(
          patientRequest.getCity(),
          patientRequest.getPostalCode(),
          patientRequest.getStreet(),
          patientRequest.getStreetNumber()
        )
      );

    patientFromDatabase.setAddressData(addressData);

    return getPatientResponse(this.patientRepository.save(patientFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.patientRepository.delete(id);
  }

  @Override
  public Patient getByMailAndPassword(final String mail, final String password) {
    return this.patientRepository.findByMailAndPassword(mail, password);
  }

  public static List<PatientResponse> getPatientResponses(final List<Patient> patients) {
    final List<PatientResponse> patientResponses = new ArrayList<>();

    for (final Patient patient : patients) {
      patientResponses.add(getPatientResponse(patient));
    }

    return patientResponses;
  }

  public static PatientResponse getPatientResponse(final Patient patient) {
    return new PatientResponse(patient);
  }
}
