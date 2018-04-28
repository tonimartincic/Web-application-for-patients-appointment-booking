package hr.fer.snarp.domain.referral;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.patient.Patient;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ReferralResponse {

  private Long id;

  private String referralName;

  private String referralGroup;

  private String departmentType;

  private Patient patient;

  private GeneralPractitioner generalPractitioner;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  private String diagnosis;

  private String remark;

  public ReferralResponse(final Referral referral) {
    this.id = referral.getId();
    this.referralName = referral.getReferralType().getName();
    this.referralGroup = referral.getReferralType().getGroup();
    this.departmentType = referral.getDepartmentType().getDescription();
    this.patient = referral.getPatient();
    this.generalPractitioner = referral.getGeneralPractitioner();
    this.createdOn = referral.getCreatedOn();
    this.diagnosis = referral.getDiagnosis();
    this.remark = referral.getRemark();
  }
}
