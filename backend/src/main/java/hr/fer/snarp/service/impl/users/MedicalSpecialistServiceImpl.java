package hr.fer.snarp.service.impl.users;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistRequest;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;
import hr.fer.snarp.enumeration.UserType;
import hr.fer.snarp.repository.MedicalSpecialistRepository;
import hr.fer.snarp.service.users.MedicalSpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MedicalSpecialistServiceImpl implements MedicalSpecialistService {

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  @Autowired
  public MedicalSpecialistServiceImpl(final MedicalSpecialistRepository medicalSpecialistRepository) {
    this.medicalSpecialistRepository = medicalSpecialistRepository;
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
    return getMedicalSpecialistResponse(this.medicalSpecialistRepository.save(new MedicalSpecialist(medicalSpecialistRequest)));
  }

  @Override
  public MedicalSpecialistResponse edit(final MedicalSpecialistRequest medicalSpecialistRequest) {
    final MedicalSpecialist medicalSpecialistFromDatabase = this.medicalSpecialistRepository.findOne(medicalSpecialistRequest.getId());

    medicalSpecialistFromDatabase.setFirstName(medicalSpecialistRequest.getFirstName());
    medicalSpecialistFromDatabase.setLastName(medicalSpecialistRequest.getLastName());
    medicalSpecialistFromDatabase.setMail(medicalSpecialistRequest.getMail());
    medicalSpecialistFromDatabase.setType(UserType.getByName(medicalSpecialistRequest.getType()));

    return getMedicalSpecialistResponse(this.medicalSpecialistRepository.save(medicalSpecialistFromDatabase));
  }

  @Override
  public MedicalSpecialistResponse editPassword(final MedicalSpecialistRequest medicalSpecialistRequest) {
    final MedicalSpecialist medicalSpecialistFromDatabase = this.medicalSpecialistRepository.findOne(medicalSpecialistRequest.getId());

    medicalSpecialistFromDatabase.setPassword(medicalSpecialistRequest.getPassword());

    return getMedicalSpecialistResponse(this.medicalSpecialistRepository.save(medicalSpecialistFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.medicalSpecialistRepository.delete(id);
  }

  private List<MedicalSpecialistResponse> getMedicalSpecialistResponses(final List<MedicalSpecialist> medicalSpecialists) {
    final List<MedicalSpecialistResponse> medicalSpecialistResponses = new ArrayList<>();

    for (final MedicalSpecialist medicalSpecialist : medicalSpecialists) {
      medicalSpecialistResponses.add(getMedicalSpecialistResponse(medicalSpecialist));
    }

    return medicalSpecialistResponses;
  }

  private MedicalSpecialistResponse getMedicalSpecialistResponse(final MedicalSpecialist medicalSpecialist) {
    return new MedicalSpecialistResponse(medicalSpecialist);
  }
}
