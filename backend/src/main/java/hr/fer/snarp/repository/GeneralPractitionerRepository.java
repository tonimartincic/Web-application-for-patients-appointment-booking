package hr.fer.snarp.repository;

import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import org.springframework.data.repository.CrudRepository;

public interface GeneralPractitionerRepository extends CrudRepository<GeneralPractitioner, Long> {
}
