package hr.fer.snarp.service.impl.users;

import com.google.common.collect.Lists;
import hr.fer.snarp.constants.UserConstants;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerRequest;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitionerResponse;
import hr.fer.snarp.repository.users.GeneralPractitionerRepository;
import hr.fer.snarp.service.AddressDataService;
import hr.fer.snarp.service.users.GeneralPractitionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GeneralPractitionerServiceImpl implements GeneralPractitionerService {

  private final GeneralPractitionerRepository generalPractitionerRepository;

  private final AddressDataService addressDataService;

  @Autowired
  public GeneralPractitionerServiceImpl(final GeneralPractitionerRepository generalPractitionerRepository, final AddressDataService addressDataService) {
    this.generalPractitionerRepository = generalPractitionerRepository;
    this.addressDataService = addressDataService;
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
    generalPractitionerRequest.setPassword(UserConstants.DEFAULT_PASSWORD);

    final GeneralPractitioner generalPractitioner = new GeneralPractitioner(generalPractitionerRequest);
    final AddressData addressData =
      this.addressDataService.add(
        new AddressData(
          generalPractitionerRequest.getCity(),
          generalPractitionerRequest.getPostalCode(),
          generalPractitionerRequest.getStreet(),
          generalPractitionerRequest.getStreetNumber()
        )
      );

    generalPractitioner.setAddressData(addressData);

    return getGeneralPractitionerResponse(this.generalPractitionerRepository.save(generalPractitioner));
  }

  @Override
  public GeneralPractitionerResponse edit(final GeneralPractitionerRequest generalPractitionerRequest) {
    final GeneralPractitioner generalPractitionerFromDatabase = this.generalPractitionerRepository.findOne(generalPractitionerRequest.getId());

    generalPractitionerFromDatabase.setFirstName(generalPractitionerRequest.getFirstName());
    generalPractitionerFromDatabase.setLastName(generalPractitionerRequest.getLastName());
    generalPractitionerFromDatabase.setMail(generalPractitionerRequest.getMail());
    generalPractitionerFromDatabase.setPhoneNumber(generalPractitionerRequest.getPhoneNumber());

    final AddressData addressData =
      this.addressDataService.add(
        new AddressData(
          generalPractitionerRequest.getCity(),
          generalPractitionerRequest.getPostalCode(),
          generalPractitionerRequest.getStreet(),
          generalPractitionerRequest.getStreetNumber()
        )
      );

    generalPractitionerFromDatabase.setAddressData(addressData);

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

  @Override
  public GeneralPractitioner getByMailAndPassword(final String mail, final String password) {
    return this.generalPractitionerRepository.findByMailAndPassword(mail, password);
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
