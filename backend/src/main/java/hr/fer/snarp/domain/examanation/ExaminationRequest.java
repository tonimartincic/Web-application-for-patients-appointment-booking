package hr.fer.snarp.domain.examanation;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExaminationRequest {

  private Long id;

  private String status;

  private Long patientId;

  private Long medicalSpecialistId;

  private Long hospitalId;

  private Long referralId;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate term;

  private String remark;
}
