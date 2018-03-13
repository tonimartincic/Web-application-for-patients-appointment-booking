package hr.fer.snarp.service.impl.users;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.enumeration.UserType;
import hr.fer.snarp.repository.GeneralPractitionerRepository;
import hr.fer.snarp.service.users.GeneralPractitionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GeneralPractitionerServiceImpl implements GeneralPractitionerService {

  private final GeneralPractitionerRepository generalPractitionerRepository;

  @Autowired
  public GeneralPractitionerServiceImpl(final GeneralPractitionerRepository generalPractitionerRepository) {
    this.generalPractitionerRepository = generalPractitionerRepository;
  }

  @Override
  public List<GeneralPractitionerResponse> getAll() {
    return getGeneralPractitionerResponses(Lists.newArrayList(this.generalPractitionerRepository.findAll()));
  }

  @Override
  public GeneralPractitionerResponse getById(final Long id) {
    return getGeneralPractitionerResponse(this.generalPractitionerRepository.findOne(id));
  }

  @Override
  public GeneralPractitionerResponse add(final GeneralPractitionerRequest generalPractitionerRequest) {
    return getGeneralPractitionerResponse(this.generalPractitionerRepository.save(new GeneralPractitioner(generalPractitionerRequest)));
  }

  @Override
  public GeneralPractitionerResponse edit(final GeneralPractitionerRequest generalPractitionerRequest) {
    final GeneralPractitioner generalPractitionerFromDatabase = this.generalPractitionerRepository.findOne(generalPractitionerRequest.getId());

    generalPractitionerFromDatabase.setFirstName(generalPractitionerRequest.getFirstName());
    generalPractitionerFromDatabase.setLastName(generalPractitionerRequest.getLastName());
    generalPractitionerFromDatabase.setMail(generalPractitionerRequest.getMail());
    generalPractitionerFromDatabase.setType(UserType.getByName(generalPractitionerRequest.getType()));

    return getGeneralPractitionerResponse(this.generalPractitionerRepository.save(generalPractitionerFromDatabase));
  }

  @Override
  public GeneralPractitionerResponse editPassword(final GeneralPractitionerRequest generalPractitionerRequest) {
    final GeneralPractitioner generalPractitionerFromDatabase = this.generalPractitionerRepository.findOne(generalPractitionerRequest.getId());

    generalPractitionerFromDatabase.setPassword(generalPractitionerRequest.getPassword());

    return getGeneralPractitionerResponse(this.generalPractitionerRepository.save(generalPractitionerFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.generalPractitionerRepository.delete(id);
  }

  private List<GeneralPractitionerResponse> getGeneralPractitionerResponses(final List<GeneralPractitioner> generalPractitioners) {
    final List<GeneralPractitionerResponse> generalPractitionerResponses = new ArrayList<>();

    for (final GeneralPractitioner generalPractitioner : generalPractitioners) {
      generalPractitionerResponses.add(getGeneralPractitionerResponse(generalPractitioner));
    }

    return generalPractitionerResponses;
  }

  private GeneralPractitionerResponse getGeneralPractitionerResponse(final GeneralPractitioner generalPractitioner) {
    return new GeneralPractitionerResponse(generalPractitioner);
  }
}
