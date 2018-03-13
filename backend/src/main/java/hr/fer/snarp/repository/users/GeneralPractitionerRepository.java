package hr.fer.snarp.repository.users;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import org.springframework.data.repository.CrudRepository;

public interface GeneralPractitionerRepository extends CrudRepository<GeneralPractitioner, Long> {

  GeneralPractitioner findByMailAndPassword(String mail, String password);
}
