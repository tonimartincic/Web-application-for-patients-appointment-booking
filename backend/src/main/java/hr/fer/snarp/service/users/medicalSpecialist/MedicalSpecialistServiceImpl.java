package hr.fer.snarp.service.users.medicalSpecialist;

import com.google.common.collect.Lists;
import hr.fer.snarp.constants.UserConstants;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistRequest;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;
import hr.fer.snarp.repository.hospital.HospitalRepository;
import hr.fer.snarp.repository.users.MedicalSpecialistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MedicalSpecialistServiceImpl implements MedicalSpecialistService {

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  private final HospitalRepository hospitalRepository;

  @Autowired
  public MedicalSpecialistServiceImpl(final MedicalSpecialistRepository medicalSpecialistRepository, final HospitalRepository hospitalRepository) {
    this.medicalSpecialistRepository = medicalSpecialistRepository;
    this.hospitalRepository = hospitalRepository;
  }

  @Override
  public List<MedicalSpecialistResponse> getAll() {
    return getMedicalSpecialistResponses(Lists.newArrayList(this.medicalSpecialistRepository.findAll()));
  }

  @Override
  public MedicalSpecialistResponse getById(final Long id) {
    return getMedicalSpecialistResponse(this.medicalSpecialistRepository.findOne(id));
  }

  @Override
  public MedicalSpecialistResponse add(final MedicalSpecialistRequest medicalSpecialistRequest) {
    MedicalSpecialist medicalSpecialist = new MedicalSpecialist(medicalSpecialistRequest);

    medicalSpecialist.setPassword(UserConstants.DEFAULT_PASSWORD);
    medicalSpecialist.setHospital(this.hospitalRepository.findOne(medicalSpecialistRequest.getHospitalId()));

    return getMedicalSpecialistResponse(this.medicalSpecialistRepository.save(new MedicalSpecialist(medicalSpecialistRequest)));
  }

  @Override
  public MedicalSpecialistResponse edit(final MedicalSpecialistRequest medicalSpecialistRequest) {
    final MedicalSpecialist medicalSpecialistFromDatabase = this.medicalSpecialistRepository.findOne(medicalSpecialistRequest.getId());

    medicalSpecialistFromDatabase.setFirstName(medicalSpecialistRequest.getFirstName());
    medicalSpecialistFromDatabase.setLastName(medicalSpecialistRequest.getLastName());
    medicalSpecialistFromDatabase.setMail(medicalSpecialistRequest.getMail());
    medicalSpecialistFromDatabase.setPhoneNumber(medicalSpecialistRequest.getPhoneNumber());
    medicalSpecialistFromDatabase.setHospital(this.hospitalRepository.findOne(medicalSpecialistRequest.getHospitalId()));

    return getMedicalSpecialistResponse(this.medicalSpecialistRepository.save(medicalSpecialistFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.medicalSpecialistRepository.delete(id);
  }

  @Override
  public MedicalSpecialist getByMailAndPassword(final String mail, final String password) {
    return this.medicalSpecialistRepository.findByMailAndPassword(mail, password);
  }

  public List<MedicalSpecialistResponse> getMedicalSpecialistResponses(final List<MedicalSpecialist> medicalSpecialists) {
    final List<MedicalSpecialistResponse> medicalSpecialistResponses = new ArrayList<>();

    for (final MedicalSpecialist medicalSpecialist : medicalSpecialists) {
      medicalSpecialistResponses.add(getMedicalSpecialistResponse(medicalSpecialist));
    }

    return medicalSpecialistResponses;
  }

  @Override
  public MedicalSpecialistResponse getMedicalSpecialistResponse(final MedicalSpecialist medicalSpecialist) {
    return new MedicalSpecialistResponse(medicalSpecialist);
  }
}
