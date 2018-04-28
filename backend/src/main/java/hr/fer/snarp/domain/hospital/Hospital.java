package hr.fer.snarp.domain.hospital;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.base.Objects;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.department.Department;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Set;

@Data
@Entity
public class Hospital {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  @OneToOne
  @JoinColumn(name = "address_data_id")
  private AddressData addressData;

  @JsonIgnore
  @OneToMany(mappedBy = "hospital")
  private Set<Department> departments;

  private String phoneNumber;

  private String mail;

  public Hospital() {
  }

  public Hospital(final HospitalRequest hospitalRequest) {
    this.name = hospitalRequest.getName();
    this.phoneNumber = hospitalRequest.getPhoneNumber();
    this.mail = hospitalRequest.getMail();
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
    final Hospital hospital = (Hospital) o;
    return Objects.equal(this.id, hospital.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(super.hashCode(), this.id);
  }
}
