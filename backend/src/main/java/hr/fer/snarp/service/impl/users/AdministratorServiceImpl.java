package hr.fer.snarp.service.impl.users;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.users.administrator.Administrator;
import hr.fer.snarp.domain.users.administrator.AdministratorRequest;
import hr.fer.snarp.domain.users.administrator.AdministratorResponse;
import hr.fer.snarp.enumeration.UserType;
import hr.fer.snarp.repository.AdministratorRepository;
import hr.fer.snarp.service.users.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    return getAdministratorResponses(Lists.newArrayList(this.administratorRepository.findAll()));
  }

  @Override
  public AdministratorResponse getById(final Long id) {
    return getAdministratorResponse(this.administratorRepository.findOne(id));
  }

  @Override
  public AdministratorResponse add(final AdministratorRequest administratorRequest) {
    return getAdministratorResponse(this.administratorRepository.save(new Administrator(administratorRequest)));
  }

  @Override
  public AdministratorResponse edit(final AdministratorRequest administratorRequest) {
    final Administrator administratorFromDatabase = this.administratorRepository.findOne(administratorRequest.getId());

    administratorFromDatabase.setFirstName(administratorRequest.getFirstName());
    administratorFromDatabase.setLastName(administratorRequest.getLastName());
    administratorFromDatabase.setMail(administratorRequest.getMail());
    administratorFromDatabase.setType(UserType.getByName(administratorRequest.getType()));

    return getAdministratorResponse(this.administratorRepository.save(administratorFromDatabase));
  }

  @Override
  public AdministratorResponse editPassword(final AdministratorRequest administratorRequest) {
    final Administrator administratorFromDatabase = this.administratorRepository.findOne(administratorRequest.getId());

    administratorFromDatabase.setPassword(administratorRequest.getPassword());

    return getAdministratorResponse(this.administratorRepository.save(administratorFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.administratorRepository.delete(id);
  }

  private List<AdministratorResponse> getAdministratorResponses(final List<Administrator> administrators) {
    final List<AdministratorResponse> administratorResponses = new ArrayList<>();

    for (final Administrator administrator : administrators) {
      administratorResponses.add(getAdministratorResponse(administrator));
    }

    return administratorResponses;
  }

  private AdministratorResponse getAdministratorResponse(final Administrator administrator) {
    return new AdministratorResponse(administrator);
  }
}
