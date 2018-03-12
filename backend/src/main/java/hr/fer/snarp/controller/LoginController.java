package hr.fer.snarp.controller;

import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  private final UserService userService;

  @Autowired
  public LoginController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/api/login")
  public UserResponse validateUser(@RequestBody User user) {
    return userService.validateUser(user.getMail(), user.getPassword());
  }
}
