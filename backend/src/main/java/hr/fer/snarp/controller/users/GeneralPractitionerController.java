package hr.fer.snarp.controller.users;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.service.users.GeneralPractitionerService;
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
  public GeneralPractitionerController(final GeneralPractitionerService generalPractitionerService) {
    this.generalPractitionerService = generalPractitionerService;
  }

  @GetMapping("/api/general-practitioners")
  public List<GeneralPractitionerResponse> getAllGeneralPractitioners() {
    return this.generalPractitionerService.getAll();
  }

  @GetMapping("/api/general-practitioners/{id}")
  public GeneralPractitionerResponse getGeneralPractitionerById(@PathVariable final Long id) {
    return this.generalPractitionerService.getById(id);
  }

  @PostMapping("/api/general-practitioners")
  public GeneralPractitionerResponse addGeneralPractitioner(@RequestBody final GeneralPractitionerRequest generalPractitionerRequest) {
    return this.generalPractitionerService.add(generalPractitionerRequest);
  }

  @PutMapping("/api/general-practitioners")
  public GeneralPractitionerResponse editGeneralPractitioner(@RequestBody final GeneralPractitionerRequest generalPractitionerRequest) {
    return this.generalPractitionerService.edit(generalPractitionerRequest);
  }

  @DeleteMapping("/api/general-practitioners/{id}")
  public void deleteGeneralPractitionerById(@PathVariable final Long id) {
    this.generalPractitionerService.deleteById(id);
  }
}
