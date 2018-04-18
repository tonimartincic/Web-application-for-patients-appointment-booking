package hr.fer.snarp.domain.users.administrator;

import hr.fer.snarp.domain.users.user.UserResponse;
import lombok.Data;

@Data
public class AdministratorResponse extends UserResponse {

  public AdministratorResponse(final Administrator administrator) {
    super(administrator);
  }
}
