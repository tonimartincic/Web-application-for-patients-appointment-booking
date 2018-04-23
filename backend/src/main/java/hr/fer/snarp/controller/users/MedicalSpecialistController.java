package hr.fer.snarp.controller.users;

import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistRequest;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialistResponse;
import hr.fer.snarp.service.users.MedicalSpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MedicalSpecialistController {

  private final MedicalSpecialistService medicalSpecialistService;

  @Autowired
  public MedicalSpecialistController(final MedicalSpecialistService medicalSpecialistService) {
    this.medicalSpecialistService = medicalSpecialistService;
  }

  @GetMapping("/api/medical-specialists")
  public List<MedicalSpecialistResponse> getAllMedicalSpecialists() {
    return this.medicalSpecialistService.getAll();
  }

  @GetMapping("/api/medical-specialists/{id}")
  public MedicalSpecialistResponse getMedicalSpecialistById(@PathVariable final Long id) {
    return this.medicalSpecialistService.getById(id);
  }

  @PostMapping("/api/medical-specialists")
  public MedicalSpecialistResponse addMedicalSpecialist(@RequestBody final MedicalSpecialistRequest medicalSpecialistRequest) {
    return this.medicalSpecialistService.add(medicalSpecialistRequest);
  }

  @PutMapping("/api/medical-specialists")
  public MedicalSpecialistResponse editMedicalSpecialist(@RequestBody final MedicalSpecialistRequest medicalSpecialistRequest) {
    return this.medicalSpecialistService.edit(medicalSpecialistRequest);
  }

  @DeleteMapping("/api/medical-specialists/{id}")
  public void deleteMedicalSpecialistById(@PathVariable final Long id) {
    this.medicalSpecialistService.deleteById(id);
  }
}
