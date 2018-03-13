package hr.fer.snarp.domain.users.user;

import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String firstName;

  private String lastName;

  private String mail;

  private UserType type;

  private String password;

  public User(final String firstName, final String lastName, final String mail, final UserType type, final String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.type = type;
    this.password = password;
  }

  public User(final UserRequest userRequest) {
    this.firstName = userRequest.getFirstName();
    this.lastName = userRequest.getLastName();
    this.mail = userRequest.getMail();
    this.type = UserType.getByName(userRequest.getType());
    this.password = userRequest.getPassword();
  }
}
