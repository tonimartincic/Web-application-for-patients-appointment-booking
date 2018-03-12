package hr.fer.snarp.service.impl;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.repository.GeneralPractitionerRepository;
import hr.fer.snarp.service.GeneralPractitionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    return null;
  }

  @Override
  public GeneralPractitionerResponse getById(final Long id) {
    return null;
  }

  @Override
  public GeneralPractitionerResponse add(final GeneralPractitionerRequest generalPractitionerRequest) {
    return null;
  }

  @Override
  public GeneralPractitionerResponse edit(final GeneralPractitionerRequest generalPractitionerRequest) {
    return null;
  }

  @Override
  public GeneralPractitionerResponse editPassword(final GeneralPractitionerRequest generalPractitionerRequest) {
    return null;
  }

  @Override
  public void deleteById(final Long id) {

  }
}
