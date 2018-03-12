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
}
