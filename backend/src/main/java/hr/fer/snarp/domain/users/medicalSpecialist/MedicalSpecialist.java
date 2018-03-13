package hr.fer.snarp.domain.users.medicalSpecialist;

import hr.fer.snarp.domain.users.user.User;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class MedicalSpecialist extends User {

  public MedicalSpecialist(final MedicalSpecialistRequest medicalSpecialistRequest) {
    super(medicalSpecialistRequest);
  }
}
