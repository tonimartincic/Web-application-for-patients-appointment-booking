package hr.fer.snarp.repository.addressData;

import hr.fer.snarp.domain.addressData.AddressData;
import org.springframework.data.repository.CrudRepository;

public interface AddressDataRepository extends CrudRepository<AddressData, Long> {
}
