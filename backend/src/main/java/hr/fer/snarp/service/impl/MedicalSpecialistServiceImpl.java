package hr.fer.snarp.service.impl;

import hr.fer.snarp.repository.MedicalSpecialistRepository;
import hr.fer.snarp.service.MedicalSpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalSpecialistServiceImpl implements MedicalSpecialistService {

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  @Autowired
  public MedicalSpecialistServiceImpl(MedicalSpecialistRepository medicalSpecialistRepository) {
    this.medicalSpecialistRepository = medicalSpecialistRepository;
  }
}
