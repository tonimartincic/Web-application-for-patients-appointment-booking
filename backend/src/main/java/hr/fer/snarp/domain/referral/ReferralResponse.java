package hr.fer.snarp.domain.referral;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ReferralResponse {

  private Long id;

  private String referralType;

  private String departmentType;

  private Long patientId;

  private Long generalPractitionerId;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  public ReferralResponse(final Referral referral) {
    this.id = referral.getId();
    this.referralType = referral.getReferralType().getName();
    this.departmentType = referral.getDepartmentType().getDescription();
    this.patientId = referral.getPatient().getId();
    this.generalPractitionerId = referral.getGeneralPractitioner().getId();
    this.createdOn = referral.getCreatedOn();
  }
}
