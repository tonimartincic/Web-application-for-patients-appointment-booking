package hr.fer.snarp.domain.users.medicalSpecialist;

import hr.fer.snarp.domain.users.user.UserResponse;
import lombok.Data;

@Data
public class MedicalSpecialistResponse extends UserResponse {

  public MedicalSpecialistResponse(final MedicalSpecialist medicalSpecialist) {
    super(medicalSpecialist);
  }
}
