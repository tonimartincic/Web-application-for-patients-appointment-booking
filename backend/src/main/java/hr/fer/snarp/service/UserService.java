package hr.fer.snarp.service;

public interface UserService {

  UserResponse validateUser(String mail, String password);
}
