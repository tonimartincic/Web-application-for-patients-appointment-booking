package hr.fer.snarp.controller.users;

import hr.fer.snarp.service.MedicalSpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MedicalSpecialistController {

  private final MedicalSpecialistService medicalSpecialistService;

  @Autowired
  public MedicalSpecialistController(MedicalSpecialistService medicalSpecialistService) {
    this.medicalSpecialistService = medicalSpecialistService;
  }
}
