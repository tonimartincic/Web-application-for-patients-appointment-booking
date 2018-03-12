package hr.fer.snarp.domain.users.user;

import lombok.Data;

@Data
public class UserResponse {

  private Long id;

  private String firstName;

  private String lastName;

  private String mail;

  private String type;

  private String password;
}
