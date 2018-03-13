package hr.fer.snarp.domain.users.generalPractitioner;

import hr.fer.snarp.domain.users.user.UserResponse;
import lombok.Data;

@Data
public class GeneralPractitionerResponse extends UserResponse {

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  public GeneralPractitionerResponse(final GeneralPractitioner generalPractitioner) {
    super(generalPractitioner);

    this.city = generalPractitioner.getAddressData().getCity();
    this.postalCode = generalPractitioner.getAddressData().getPostalCode();
    this.street = generalPractitioner.getAddressData().getStreet();
    this.streetNumber = generalPractitioner.getAddressData().getStreetNumber();
  }
}
