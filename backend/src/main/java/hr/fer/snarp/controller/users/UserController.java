package hr.fer.snarp.controller.users;

import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.service.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(final UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/api/users/{id}/{type}")
  public UserResponse getUser(@PathVariable final Long id, @PathVariable final String type) {
    return this.userService.getUser(id, type);
  }
}
