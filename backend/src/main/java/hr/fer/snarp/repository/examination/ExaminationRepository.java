package hr.fer.snarp.repository.examination;

import hr.fer.snarp.domain.examanation.Examination;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.patient.Patient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ExaminationRepository extends CrudRepository<Examination, Long> {

  List<Examination> findAllByPatient(Patient patient);

  List<Examination> findAllByMedicalSpecialist(MedicalSpecialist medicalSpecialist);
}
