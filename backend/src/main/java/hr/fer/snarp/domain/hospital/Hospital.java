package hr.fer.snarp.domain.hospital;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.department.Department;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Data
@Entity
public class Hospital {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private AddressData addressData;

  @JsonIgnore
  @OneToMany(mappedBy = "hospital")
  private Set<Department> departments;

  public Hospital() {
  }

  public Hospital(final HospitalRequest hospitalRequest) {
    this.name = hospitalRequest.getName();
  }
}
