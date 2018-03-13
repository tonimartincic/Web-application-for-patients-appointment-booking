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

  public UserResponse(final User user) {
    this.id = user.getId();
    this.firstName = user.getFirstName();
    this.lastName = user.getLastName();
    this.mail = user.getMail();
    this.type = user.getType().getName();
    this.password = user.getPassword();
  }
}
