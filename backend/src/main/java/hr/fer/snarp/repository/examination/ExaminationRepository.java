package hr.fer.snarp.repository.examination;

import hr.fer.snarp.domain.examanation.Examination;
import org.springframework.data.repository.CrudRepository;

public interface ExaminationRepository extends CrudRepository<Examination, Long> {
}
