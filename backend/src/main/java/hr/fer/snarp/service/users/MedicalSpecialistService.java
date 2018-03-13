package hr.fer.snarp.service.users;

import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistRequest;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;

import java.util.List;

public interface MedicalSpecialistService {

  List<MedicalSpecialistResponse> getAll();

  MedicalSpecialistResponse getById(Long id);

  MedicalSpecialistResponse add(MedicalSpecialistRequest medicalSpecialistRequest);

  MedicalSpecialistResponse edit(MedicalSpecialistRequest medicalSpecialistRequest);

  MedicalSpecialistResponse editPassword(MedicalSpecialistRequest medicalSpecialistRequest);

  void deleteById(Long id);
}
