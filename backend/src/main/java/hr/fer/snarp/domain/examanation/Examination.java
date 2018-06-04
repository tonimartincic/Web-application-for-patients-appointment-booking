package hr.fer.snarp.domain.examanation;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.common.base.Objects;
import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.enumeration.ExaminationStatus;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Examination {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  private ExaminationStatus status;

  @ManyToOne
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne
  @JoinColumn(name = "medical_specialist_id")
  private MedicalSpecialist medicalSpecialist;

  @ManyToOne
  @JoinColumn(name = "hospital_id")
  private Hospital hospital;

  @ManyToOne
  @JoinColumn(name = "referral_id")
  private Referral referral;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate term;

  private String remark;

  public Examination() {
  }

  public Examination(ExaminationRequest examinationRequest) {
    this.id = examinationRequest.getId();
    this.status = ExaminationStatus.getByName(examinationRequest.getStatus());
    this.term = examinationRequest.getTerm();
    this.remark = examinationRequest.getRemark();
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    if (!super.equals(o)) return false;
    Examination that = (Examination) o;
    return Objects.equal(id, that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(super.hashCode(), id);
  }
}
