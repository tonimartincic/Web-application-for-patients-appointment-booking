package hr.fer.snarp.controller.users;

import hr.fer.snarp.service.GeneralPractitionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeneralPractitionerController {

  private final GeneralPractitionerService generalPractitionerService;

  @Autowired
  public GeneralPractitionerController(GeneralPractitionerService generalPractitionerService) {
    this.generalPractitionerService = generalPractitionerService;
  }
}
