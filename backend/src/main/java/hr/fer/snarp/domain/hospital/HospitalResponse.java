package hr.fer.snarp.domain.hospital;

import lombok.Data;

@Data
public class HospitalResponse {

  private Long id;

  private String name;

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  private String phoneNumber;

  private String mail;

  public HospitalResponse(final Hospital hospital) {
    this.id = hospital.getId();
    this.name = hospital.getName();
    this.city = hospital.getAddressData().getCity();
    this.postalCode = hospital.getAddressData().getPostalCode();
    this.street = hospital.getAddressData().getStreet();
    this.streetNumber = hospital.getAddressData().getStreetNumber();
    this.phoneNumber = hospital.getPhoneNumber();
    this.mail = hospital.getMail();
  }
}
