package hr.fer.snarp.domain.users.user;

import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@Data
@MappedSuperclass
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String firstName;

  private String lastName;

  private String mail;

  private UserType type;

  private String password;

  public User() {
  }

  public User(final String firstName, final String lastName, final String mail, final UserType type, final String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.type = type;
    this.password = password;
  }

  public User(final UserRequest userRequest, final UserType userType) {
    this.firstName = userRequest.getFirstName();
    this.lastName = userRequest.getLastName();
    this.mail = userRequest.getMail();
    this.type = userType;
    this.password = userRequest.getPassword();
  }
}
