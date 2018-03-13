package hr.fer.snarp.repository.users;

import hr.fer.snarp.domain.users.patient.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient, Long> {

  Patient findByMailAndPassword(String mail, String password);
}
