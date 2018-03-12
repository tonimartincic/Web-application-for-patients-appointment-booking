package hr.fer.snarp.controller.users;

import hr.fer.snarp.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdministratorController {

  private final AdministratorService administratorService;

  @Autowired
  public AdministratorController(AdministratorService administratorService) {
    this.administratorService = administratorService;
  }
}
