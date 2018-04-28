package hr.fer.snarp.domain.users.generalPractitioner;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.users.user.User;
import hr.fer.snarp.enumeration.UserType;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Set;

@Data
@Entity
public class GeneralPractitioner extends User {

  @OneToOne
  @JoinColumn(name = "address_data_id")
  private AddressData addressData;

  @JsonIgnore
  @OneToMany(mappedBy = "generalPractitioner", fetch = FetchType.LAZY)
  private Set<Referral> referrals;

  public GeneralPractitioner() {
  }

  public GeneralPractitioner(final GeneralPractitionerRequest generalPractitionerRequest) {
    super(generalPractitionerRequest, UserType.GENERAL_PRACTITIONER);
  }
}
