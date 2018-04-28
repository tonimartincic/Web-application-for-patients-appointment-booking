package hr.fer.snarp.domain.users.patient;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.Set;

@Data
@Entity
public class Patient extends User {

  @ManyToOne
  @JoinColumn(name = "address_data_id")
  private AddressData addressData;

  private String OIB;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dateOfBirth;

  private String sex;

  @JsonIgnore
  @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Referral> referrals;

  public Patient() {
  }

  public Patient(final PatientRequest patientRequest) {
    super(patientRequest, UserType.PATIENT);

    this.OIB = patientRequest.getOIB();
    this.dateOfBirth = patientRequest.getDateOfBirth();
    this.sex = patientRequest.getSex();
  }
}
