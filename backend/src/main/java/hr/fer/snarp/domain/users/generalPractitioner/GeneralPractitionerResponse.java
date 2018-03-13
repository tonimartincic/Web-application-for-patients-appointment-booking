package hr.fer.snarp.domain.users.generalPractitioner;

import hr.fer.snarp.domain.users.user.UserResponse;
import lombok.Data;

@Data
public class GeneralPractitionerResponse extends UserResponse {

  public GeneralPractitionerResponse(final GeneralPractitioner generalPractitioner) {
    super(generalPractitioner);
  }
}
