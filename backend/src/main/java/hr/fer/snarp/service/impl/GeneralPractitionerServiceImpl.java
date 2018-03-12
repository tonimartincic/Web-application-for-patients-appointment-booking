package hr.fer.snarp.service.impl;

import hr.fer.snarp.repository.GeneralPractitionerRepository;
import hr.fer.snarp.service.GeneralPractitionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeneralPractitionerServiceImpl implements GeneralPractitionerService {

  private final GeneralPractitionerRepository generalPractitionerRepository;

  @Autowired
  public GeneralPractitionerServiceImpl(GeneralPractitionerRepository generalPractitionerRepository) {
    this.generalPractitionerRepository = generalPractitionerRepository;
  }
}
