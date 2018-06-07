package hr.fer.snarp.service.addressData;

import hr.fer.snarp.domain.addressData.AddressData;

import java.util.List;

public interface AddressDataService {

  List<AddressData> getAll();

  AddressData getById(Long id);

  AddressData add(AddressData addressData);

  AddressData edit(AddressData addressData);

  void deleteById(Long id);
}
