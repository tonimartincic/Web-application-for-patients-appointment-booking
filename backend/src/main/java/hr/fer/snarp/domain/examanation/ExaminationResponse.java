package hr.fer.snarp.domain.examanation;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.referral.ReferralResponse;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.patient.PatientResponse;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExaminationResponse {

  private Long id;

  private String status;

  private PatientResponse patient;

  private MedicalSpecialist medicalSpecialist;

  private Hospital hospital;

  private ReferralResponse referral;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate term;

  private String remark;

  public ExaminationResponse(Examination examination) {
    this.id = examination.getId();
    this.status = examination.getStatus().getName();
    this.medicalSpecialist = examination.getMedicalSpecialist();
    this.hospital = examination.getHospital();
    this.term = examination.getTerm();
    this.remark = examination.getRemark();
  }
}
