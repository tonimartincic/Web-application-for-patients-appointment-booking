package hr.fer.snarp.service.users;

import hr.fer.snarp.domain.users.user.UserRequest;
import hr.fer.snarp.domain.users.user.UserResponse;

public interface UserService {

  UserResponse validateUser(String mail, String password);

  UserResponse getUser(Long id, String type);

  UserResponse changePassword(UserRequest userRequest);
}
