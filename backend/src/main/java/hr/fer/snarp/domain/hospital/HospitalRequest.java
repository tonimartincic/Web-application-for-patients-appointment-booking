package hr.fer.snarp.domain.hospital;

import lombok.Data;

@Data
public class HospitalRequest {

  private Long id;

  private String name;

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  private String phoneNumber;

  private String mail;
}
