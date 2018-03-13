package hr.fer.snarp.domain.users.generalPractitioner;

import hr.fer.snarp.domain.users.user.User;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class GeneralPractitioner extends User {

  public GeneralPractitioner(final GeneralPractitionerRequest generalPractitionerRequest) {
    super(generalPractitionerRequest);
  }
}
