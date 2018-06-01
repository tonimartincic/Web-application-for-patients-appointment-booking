package hr.fer.snarp.domain.referral;

import lombok.Data;

@Data
public class ReferralRequest {

  private Long id;

  private String referralType;

  private String departmentType;

  private Long patientId;

  private Long generalPractitionerId;

  private String diagnosis;

  private String remark;
}
