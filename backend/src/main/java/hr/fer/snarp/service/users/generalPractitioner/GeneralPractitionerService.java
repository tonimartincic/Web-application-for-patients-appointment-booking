package hr.fer.snarp.service.users.generalPractitioner;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;

import java.util.List;

public interface GeneralPractitionerService {

  List<GeneralPractitionerResponse> getAll();

  GeneralPractitionerResponse getById(Long id);

  GeneralPractitionerResponse add(GeneralPractitionerRequest generalPractitionerRequest);

  GeneralPractitionerResponse edit(GeneralPractitionerRequest generalPractitionerRequest);

  void deleteById(Long id);

  GeneralPractitioner getByMailAndPassword(String mail, String password);

  GeneralPractitionerResponse getGeneralPractitionerResponse(final GeneralPractitioner generalPractitioner);
}
