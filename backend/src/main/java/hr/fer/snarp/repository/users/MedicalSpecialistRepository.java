package hr.fer.snarp.repository.users;

import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import org.springframework.data.repository.CrudRepository;

public interface MedicalSpecialistRepository extends CrudRepository<MedicalSpecialist, Long> {
}
