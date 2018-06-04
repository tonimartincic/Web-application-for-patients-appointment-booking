package hr.fer.snarp.domain.department;

import com.google.common.base.Objects;
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

  public Department() {
  }

  public Department(final DepartmentType type, final Hospital hospital) {
    this.type = type;
    this.hospital = hospital;
  }

  public Department(final DepartmentRequest departmentRequest) {
    this.id = departmentRequest.getId();
    this.type = DepartmentType.getByDescription(departmentRequest.getType());
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
    final Department that = (Department) o;
    return Objects.equal(this.id, that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(super.hashCode(), this.id);
  }

  @Override
  public String toString() {
    return "Department{" +
      "id=" + id +
      '}';
  }
}
