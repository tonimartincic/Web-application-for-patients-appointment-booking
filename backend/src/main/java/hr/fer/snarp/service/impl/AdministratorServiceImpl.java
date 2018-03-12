package hr.fer.snarp.service.impl;

import hr.fer.snarp.domain.users.administrator.AdministratorRequest;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;
import hr.fer.snarp.repository.AdministratorRepository;
import hr.fer.snarp.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministratorServiceImpl implements AdministratorService {

  private final AdministratorRepository administratorRepository;

  @Autowired
  public AdministratorServiceImpl(final AdministratorRepository administratorRepository) {
    this.administratorRepository = administratorRepository;
  }

  @Override
  public List<AdministratorResponse> getAll() {
    return null;
  }

  @Override
  public AdministratorResponse getById(final Long id) {
    return null;
  }

  @Override
  public AdministratorResponse add(final AdministratorRequest administratorRequest) {
    return null;
  }

  @Override
  public AdministratorResponse edit(final AdministratorRequest administratorRequest) {
    return null;
  }

  @Override
  public AdministratorResponse editPassword(final AdministratorRequest administratorRequest) {
    return null;
  }

  @Override
  public void deleteById(final Long id) {

  }
}
