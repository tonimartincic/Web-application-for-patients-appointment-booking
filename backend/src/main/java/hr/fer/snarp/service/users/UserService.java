package hr.fer.snarp.service.users;

import hr.fer.snarp.domain.users.user.UserResponse;

public interface UserService {

  UserResponse validateUser(String mail, String password);
}
