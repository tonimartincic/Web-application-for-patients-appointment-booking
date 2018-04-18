package hr.fer.snarp.service.impl;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.repository.AddressDataRepository;
import hr.fer.snarp.service.AddressDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressDataServiceImpl implements AddressDataService {

  private final AddressDataRepository addressDataRepository;

  @Autowired
  public AddressDataServiceImpl(final AddressDataRepository addressDataRepository) {
    this.addressDataRepository = addressDataRepository;
  }

  @Override
  public List<AddressData> getAll() {
    return Lists.newArrayList(this.addressDataRepository.findAll());
  }

  @Override
  public AddressData getById(final Long id) {
    return this.addressDataRepository.findOne(id);
  }

  @Override
  public AddressData add(final AddressData addressData) {
    return this.addressDataRepository.save(addressData);
  }

  @Override
  public AddressData edit(final AddressData addressData) {
    return this.addressDataRepository.save(addressData);
  }

  @Override
  public void deleteById(final Long id) {
    this.addressDataRepository.delete(id);
  }
}
