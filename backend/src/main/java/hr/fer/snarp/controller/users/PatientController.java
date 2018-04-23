package hr.fer.snarp.controller.users;

import hr.fer.snarp.domain.users.patient.PatientRequest;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import hr.fer.snarp.service.users.PatientService;
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
public class PatientController {

  private final PatientService patientService;

  @Autowired
  public PatientController(final PatientService patientService) {
    this.patientService = patientService;
  }

  @GetMapping("/api/patients")
  public List<PatientResponse> getAllPatients() {
    return this.patientService.getAll();
  }

  @GetMapping("/api/patients/{id}")
  public PatientResponse getPatientById(@PathVariable final Long id) {
    return this.patientService.getById(id);
  }

  @PostMapping("/api/patients")
  public PatientResponse addPatient(@RequestBody final PatientRequest patientRequest) {
    return this.patientService.add(patientRequest);
  }

  @PutMapping("/api/patients")
  public PatientResponse editPatient(@RequestBody final PatientRequest patientRequest) {
    return this.patientService.edit(patientRequest);
  }

  @DeleteMapping("/api/patients/{id}")
  public void deletePatientById(@PathVariable final Long id) {
    this.patientService.deleteById(id);
  }
}
