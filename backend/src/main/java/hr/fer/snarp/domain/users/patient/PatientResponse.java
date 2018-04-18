package hr.fer.snarp.domain.users.patient;

import hr.fer.snarp.domain.users.user.UserResponse;
import lombok.Data;

@Data
public class PatientResponse extends UserResponse {

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  public PatientResponse(final Patient patient) {
    super(patient);

    this.city = patient.getAddressData().getCity();
    this.postalCode = patient.getAddressData().getPostalCode();
    this.street = patient.getAddressData().getStreet();
    this.streetNumber = patient.getAddressData().getStreetNumber();
  }
}
