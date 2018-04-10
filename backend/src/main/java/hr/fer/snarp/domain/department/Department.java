package hr.fer.snarp.domain.department;

import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.enumeration.DepartmentType;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Department {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  private DepartmentType type;

  @ManyToOne
  @JoinColumn(name = "hospital_id")
  private Hospital hospital;

  public Department(final DepartmentType type, final Hospital hospital) {
    this.type = type;
    this.hospital = hospital;
  }

  public Department(final DepartmentRequest departmentRequest) {
    this.type = DepartmentType.getByDescription(departmentRequest.getType());
  }
}
