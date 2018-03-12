package hr.fer.snarp.repository;

import hr.fer.snarp.domain.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentRepository extends CrudRepository<Department, Long> {
}
