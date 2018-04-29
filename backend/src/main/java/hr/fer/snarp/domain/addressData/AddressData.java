package hr.fer.snarp.domain.addressData;

import com.google.common.base.Objects;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class AddressData {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  public AddressData() {
  }

  public AddressData(final String city, final Long postalCode, final String street, final Long streetNumber) {
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
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
    final AddressData that = (AddressData) o;
    return Objects.equal(this.id, that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(super.hashCode(), this.id);
  }
}
