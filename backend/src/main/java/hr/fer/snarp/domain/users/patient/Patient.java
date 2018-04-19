package hr.fer.snarp.domain.users.patient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;

@Data
@Entity
public class Patient extends User {

  @ManyToOne
  @JoinColumn(name = "address_data_id")
  private AddressData addressData;

  @JsonIgnore
  @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY)
  private Set<Referral> referrals;

  public Patient() {
  }

  public Patient(final PatientRequest patientRequest) {
    super(patientRequest, UserType.PATIENT);
  }
}
