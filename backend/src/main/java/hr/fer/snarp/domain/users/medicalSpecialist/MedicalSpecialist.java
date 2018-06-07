package hr.fer.snarp.domain.users.medicalSpecialist;

import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.DepartmentType;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class MedicalSpecialist extends User {

  @Enumerated(EnumType.STRING)
  private DepartmentType departmentType;

  @ManyToOne
  @JoinColumn(name = "hospital_id")
  private Hospital hospital;

  public MedicalSpecialist() {
  }

  public MedicalSpecialist(final MedicalSpecialistRequest medicalSpecialistRequest) {
    super(medicalSpecialistRequest, UserType.MEDICAL_SPECIALIST);

    this.departmentType = DepartmentType.getByDescription(medicalSpecialistRequest.getDepartmentType());
  }
}
