package hr.fer.snarp.service.examination;

import hr.fer.snarp.domain.examanation.ExaminationRequest;
import hr.fer.snarp.domain.examanation.ExaminationResponse;

import java.util.List;

public interface ExaminationService {

  List<ExaminationResponse> getAll();

  ExaminationResponse getById(Long id);

  ExaminationResponse add(ExaminationRequest examinationRequest);

  ExaminationResponse edit(ExaminationRequest examinationRequest);

  void deleteById(Long id);

  List<String> getExaminationStatuses();
}
