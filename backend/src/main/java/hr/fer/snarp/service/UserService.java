package hr.fer.snarp.service;

import hr.fer.snarp.domain.users.user.UserResponse;

public interface UserService {

  UserResponse validateUser(String mail, String password);
}
