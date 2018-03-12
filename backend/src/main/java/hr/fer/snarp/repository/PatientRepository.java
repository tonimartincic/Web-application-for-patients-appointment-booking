package hr.fer.snarp.repository;

import hr.fer.snarp.domain.users.patient.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient, Long> {
}
