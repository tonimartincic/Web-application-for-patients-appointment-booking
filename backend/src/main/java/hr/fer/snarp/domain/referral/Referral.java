package hr.fer.snarp.domain.referral;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.common.base.Objects;
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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

  @ManyToOne
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne
  @JoinColumn(name = "general_practitioner_id")
  private GeneralPractitioner generalPractitioner;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  private String diagnosis;

  private String remark;

  public Referral() {
  }

  public Referral(final ReferralRequest referralRequest) {
    this.id = referralRequest.getId();
    this.referralType = ReferralType.getByName(referralRequest.getReferralType());
    this.departmentType = DepartmentType.getByDescription(referralRequest.getDepartmentType());
    this.diagnosis = referralRequest.getDiagnosis();
    this.remark = referralRequest.getRemark();
    this.createdOn = LocalDate.now();
  }

  @Override
  public boolean equals(final Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    if (!super.equals(o)) {
      return false;
    }
    final Referral referral = (Referral) o;
    return Objects.equal(this.id, referral.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(super.hashCode(), this.id);
  }

  @Override
  public String toString() {
    return "Referral{" +
      "id=" + id +
      '}';
  }
}
