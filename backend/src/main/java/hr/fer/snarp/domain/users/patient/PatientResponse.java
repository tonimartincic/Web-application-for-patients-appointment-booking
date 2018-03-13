package hr.fer.snarp.domain.users.patient;

import hr.fer.snarp.domain.users.user.UserResponse;
import lombok.Data;

@Data
public class PatientResponse extends UserResponse {

  public PatientResponse(final Patient patient) {
    super(patient);
  }
}
