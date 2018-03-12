package hr.fer.snarp.service.impl;

import hr.fer.snarp.repository.AdministratorRepository;
import hr.fer.snarp.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministratorServiceImpl implements AdministratorService {

  private final AdministratorRepository administratorRepository;

  @Autowired
  public AdministratorServiceImpl(AdministratorRepository administratorRepository) {
    this.administratorRepository = administratorRepository;
  }
}
