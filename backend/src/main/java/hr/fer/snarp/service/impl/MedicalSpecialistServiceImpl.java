package hr.fer.snarp.service.impl;

import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistRequest;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;
import hr.fer.snarp.repository.MedicalSpecialistRepository;
import hr.fer.snarp.service.MedicalSpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    return null;
  }

  @Override
  public MedicalSpecialistResponse getById(final Long id) {
    return null;
  }

  @Override
  public MedicalSpecialistResponse add(final MedicalSpecialistRequest medicalSpecialistRequest) {
    return null;
  }

  @Override
  public MedicalSpecialistResponse edit(final MedicalSpecialistRequest medicalSpecialistRequest) {
    return null;
  }

  @Override
  public MedicalSpecialistResponse editPassword(final MedicalSpecialistRequest medicalSpecialistRequest) {
    return null;
  }

  @Override
  public void deleteById(final Long id) {

  }
}
