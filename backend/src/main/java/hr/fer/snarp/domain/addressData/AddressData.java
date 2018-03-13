package hr.fer.snarp.domain.addressData;

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

  public AddressData(final String city, final Long postalCode, final String street, final Long streetNumber) {
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
  }
}
