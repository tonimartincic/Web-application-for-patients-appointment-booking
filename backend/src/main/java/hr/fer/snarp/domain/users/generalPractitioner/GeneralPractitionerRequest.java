package hr.fer.snarp.domain.users.generalPractitioner;

import hr.fer.snarp.domain.users.user.UserRequest;
import lombok.Data;

@Data
public class GeneralPractitionerRequest extends UserRequest {

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;
}
