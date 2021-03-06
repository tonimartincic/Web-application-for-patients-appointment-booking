package hr.fer.snarp.service.users.administrator;

import hr.fer.snarp.domain.users.administrator.Administrator;
import hr.fer.snarp.domain.users.administrator.AdministratorRequest;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;

import java.util.List;

public interface AdministratorService {

  List<AdministratorResponse> getAll();

  AdministratorResponse getById(Long id);

  AdministratorResponse add(AdministratorRequest administratorRequest);

  AdministratorResponse edit(AdministratorRequest administratorRequest);

  void deleteById(Long id);

  Administrator getByMailAndPassword(String mail, String password);

  AdministratorResponse getAdministratorResponse(final Administrator administrator);
}
