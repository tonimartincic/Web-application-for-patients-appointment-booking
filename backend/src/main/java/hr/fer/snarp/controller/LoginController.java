package hr.fer.snarp.controller;

import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.service.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  private final UserService userService;

  @Autowired
  public LoginController(final UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/api/login")
  public UserResponse validateUser(@RequestBody final User user) {
    return this.userService.validateUser(user.getMail(), user.getPassword());
  }
}
