package hr.fer.snarp.service.users;

import hr.fer.snarp.domain.users.administrator.AdministratorRequest;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;

import java.util.List;

public interface AdministratorService {

  List<AdministratorResponse> getAll();

  AdministratorResponse getById(Long id);

  AdministratorResponse add(AdministratorRequest administratorRequest);

  AdministratorResponse edit(AdministratorRequest administratorRequest);

  AdministratorResponse editPassword(AdministratorRequest administratorRequest);

  void deleteById(Long id);
}
