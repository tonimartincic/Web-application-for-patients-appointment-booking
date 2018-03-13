package hr.fer.snarp.repository;

import hr.fer.snarp.domain.hospital.Hospital;
import org.springframework.data.repository.CrudRepository;

public interface HospitalRepository extends CrudRepository<Hospital, Long> {
}
