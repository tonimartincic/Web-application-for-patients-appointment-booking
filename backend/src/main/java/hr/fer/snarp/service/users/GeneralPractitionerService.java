package hr.fer.snarp.service.users;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;

import java.util.List;

public interface GeneralPractitionerService {

  List<GeneralPractitionerResponse> getAll();

  GeneralPractitionerResponse getById(Long id);

  GeneralPractitionerResponse add(GeneralPractitionerRequest generalPractitionerRequest);

  GeneralPractitionerResponse edit(GeneralPractitionerRequest generalPractitionerRequest);

  GeneralPractitionerResponse editPassword(GeneralPractitionerRequest generalPractitionerRequest);

  void deleteById(Long id);
}
