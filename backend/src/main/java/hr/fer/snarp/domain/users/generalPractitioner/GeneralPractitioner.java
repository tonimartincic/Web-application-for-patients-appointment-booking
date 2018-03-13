package hr.fer.snarp.domain.users.generalPractitioner;

import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.users.user.User;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class GeneralPractitioner extends User {

  private AddressData addressData;

  public GeneralPractitioner(final GeneralPractitionerRequest generalPractitionerRequest) {
    super(generalPractitionerRequest);
  }
}
