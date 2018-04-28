package hr.fer.snarp.domain.users.administrator;

import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Administrator extends User {

  public Administrator() {
  }

  public Administrator(final AdministratorRequest administratorRequest) {
    super(administratorRequest, UserType.ADMINISTRATOR);
  }


}
