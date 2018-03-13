package hr.fer.snarp.domain.referral;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ReferralRequest {

  private Long id;

  private String referralType;

  private String departmentType;

  private Long patientId;

  private Long generalPractitionerId;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;
}
