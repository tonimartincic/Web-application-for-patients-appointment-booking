package hr.fer.snarp.domain.users.medicalSpecialist;

import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.users.user.UserResponse;
import hr.fer.snarp.enumeration.DepartmentType;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
public class MedicalSpecialistResponse extends UserResponse {

  private DepartmentType departmentType;

  private Hospital hospital;

  public MedicalSpecialistResponse(final MedicalSpecialist medicalSpecialist) {
    super(medicalSpecialist, UserType.MEDICAL_SPECIALIST);

    this.departmentType = medicalSpecialist.getDepartmentType();
    this.hospital = medicalSpecialist.getHospital();
  }
}
