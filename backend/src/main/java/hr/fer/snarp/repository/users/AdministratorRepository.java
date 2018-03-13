package hr.fer.snarp.repository.users;

import hr.fer.snarp.domain.users.administrator.Administrator;
import org.springframework.data.repository.CrudRepository;

public interface AdministratorRepository extends CrudRepository<Administrator, Long> {
}
