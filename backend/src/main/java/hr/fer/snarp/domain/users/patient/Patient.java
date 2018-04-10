package hr.fer.snarp.domain.users.patient;

import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Patient extends User {

  private AddressData addressData;

  public Patient() {
  }

  public Patient(final PatientRequest patientRequest) {
    super(patientRequest, UserType.PATIENT);
  }
}
