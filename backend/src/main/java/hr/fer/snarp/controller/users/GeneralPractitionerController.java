package hr.fer.snarp.controller.users;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.service.GeneralPractitionerService;
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
public class GeneralPractitionerController {

  private final GeneralPractitionerService generalPractitionerService;

  @Autowired
  public GeneralPractitionerController(GeneralPractitionerService generalPractitionerService) {
    this.generalPractitionerService = generalPractitionerService;
  }

  @GetMapping("/api/generalPractitioners")
  public List<GeneralPractitionerResponse> getAllGeneralPractitioners() {
    return this.generalPractitionerService.getAll();
  }

  @GetMapping("/api/generalPractitioners/{id}")
  public GeneralPractitionerResponse getGeneralPractitionerById(@PathVariable Long id) {
    return this.generalPractitionerService.getById(id);
  }

  @PostMapping("/api/generalPractitioners")
  public GeneralPractitionerResponse addNewGeneralPractitioner(@RequestBody GeneralPractitionerRequest generalPractitionerRequest) {
    return this.generalPractitionerService.add(generalPractitionerRequest);
  }

  @PutMapping("/api/generalPractitioners")
  public GeneralPractitionerResponse editGeneralPractitioner(@RequestBody GeneralPractitionerRequest generalPractitionerRequest) {
    return this.generalPractitionerService.edit(generalPractitionerRequest);
  }

  @PutMapping("/api/generalPractitioners/edit-password")
  public GeneralPractitionerResponse editGeneralPractitionerPassword(@RequestBody GeneralPractitionerRequest generalPractitionerRequest) {
    return this.generalPractitionerService.editPassword(generalPractitionerRequest);
  }

  @DeleteMapping("/api/generalPractitioners/{id}")
  public void deleteGeneralPractitionerById(@PathVariable Long id) {
    this.generalPractitionerService.deleteById(id);
  }
}
