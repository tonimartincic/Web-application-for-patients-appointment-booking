package hr.fer.snarp.controller.users;

import hr.fer.snarp.domain.users.administrator.AdministratorRequest;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;
import hr.fer.snarp.service.users.administrator.AdministratorService;
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
public class AdministratorController {

  private final AdministratorService administratorService;

  @Autowired
  public AdministratorController(final AdministratorService administratorService) {
    this.administratorService = administratorService;
  }

  @GetMapping("/api/administrators")
  public List<AdministratorResponse> getAllAdministrators() {
    return this.administratorService.getAll();
  }

  @GetMapping("/api/administrators/{id}")
  public AdministratorResponse getAdministratorById(@PathVariable final Long id) {
    return this.administratorService.getById(id);
  }

  @PostMapping("/api/administrators")
  public AdministratorResponse addAdministrator(@RequestBody final AdministratorRequest administratorRequest) {
    return this.administratorService.add(administratorRequest);
  }

  @PutMapping("/api/administrators")
  public AdministratorResponse editAdministrator(@RequestBody final AdministratorRequest administratorRequest) {
    return this.administratorService.edit(administratorRequest);
  }

  @DeleteMapping("/api/administrators/{id}")
  public void deleteAdministratorById(@PathVariable final Long id) {
    this.administratorService.deleteById(id);
  }
}
