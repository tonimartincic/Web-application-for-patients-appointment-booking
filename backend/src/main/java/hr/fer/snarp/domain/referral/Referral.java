package hr.fer.snarp.domain.referral;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.enumeration.DepartmentType;
import hr.fer.snarp.enumeration.ReferralType;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@Entity
public class Referral {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  private ReferralType referralType;

  @Enumerated(EnumType.STRING)
  private DepartmentType departmentType;

  private Patient patient;

  private GeneralPractitioner generalPractitioner;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  public Referral() {
  }

  public Referral(final ReferralType referralType, final DepartmentType departmentType, final Patient patient, final GeneralPractitioner generalPractitioner) {
    this.referralType = referralType;
    this.departmentType = departmentType;
    this.patient = patient;
    this.generalPractitioner = generalPractitioner;
    this.createdOn = LocalDate.now();
  }

  public Referral(final ReferralRequest referralRequest) {
    this.referralType = ReferralType.getByName(referralRequest.getReferralType());
    this.departmentType = DepartmentType.getByDescription(referralRequest.getDepartmentType());
  }
}
