package hr.fer.snarp.domain.users.medicalSpecialist;

import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class MedicalSpecialist extends User {

  public MedicalSpecialist() {
  }

  public MedicalSpecialist(final MedicalSpecialistRequest medicalSpecialistRequest) {
    super(medicalSpecialistRequest, UserType.MEDICAL_SPECIALIST);
  }
}
