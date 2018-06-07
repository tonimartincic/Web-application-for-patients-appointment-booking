package hr.fer.snarp.domain.users.user;

import com.google.common.base.Objects;
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

  private String phoneNumber;

  public User() {
  }

  public User(final UserRequest userRequest, final UserType userType) {
    this.id = userRequest.getId();
    this.firstName = userRequest.getFirstName();
    this.lastName = userRequest.getLastName();
    this.mail = userRequest.getMail();
    this.type = userType;
    this.password = userRequest.getPassword();
    this.phoneNumber = userRequest.getPhoneNumber();
  }

  @Override
  public boolean equals(final Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    if (!super.equals(o)) {
      return false;
    }
    final User user = (User) o;
    return Objects.equal(this.id, user.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(super.hashCode(), this.id);
  }

  @Override
  public String toString() {
    return "User{" +
      "id=" + id +
      '}';
  }
}
