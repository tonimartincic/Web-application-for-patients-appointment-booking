package hr.fer.snarp.domain.users.patient;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PatientResponse extends UserResponse {

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  private String OIB;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dateOfBirth;

  public PatientResponse(final Patient patient) {
    super(patient, UserType.PATIENT);

    this.city = patient.getAddressData().getCity();
    this.postalCode = patient.getAddressData().getPostalCode();
    this.street = patient.getAddressData().getStreet();
    this.streetNumber = patient.getAddressData().getStreetNumber();
    this.OIB = patient.getOIB();
    this.dateOfBirth = patient.getDateOfBirth();
  }
}
