package hr.fer.snarp.controller.examination;

import hr.fer.snarp.domain.examanation.ExaminationRequest;
import hr.fer.snarp.domain.examanation.ExaminationResponse;
import hr.fer.snarp.service.examination.ExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExaminationController {

  private final ExaminationService examinationService;

  @Autowired
  public ExaminationController(final ExaminationService examinationService) {
    this.examinationService = examinationService;
  }

  @GetMapping("/api/examinations/{userId}/{userType}")
  public List<ExaminationResponse> getAllExaminations(@PathVariable Long userId, @PathVariable String userType) {
    return this.examinationService.getAll(userId, userType);
  }

  @GetMapping("/api/examinations/{id}")
  public ExaminationResponse getExaminationById(@PathVariable final Long id) {
    return this.examinationService.getById(id);
  }

  @PostMapping("/api/examinations")
  public ExaminationResponse addExamination(@RequestBody final ExaminationRequest examinationRequest) {
    return this.examinationService.add(examinationRequest);
  }

  @PutMapping("/api/examinations")
  public ExaminationResponse editExamination(@RequestBody final ExaminationRequest examinationRequest) {
    return this.examinationService.edit(examinationRequest);
  }

  @DeleteMapping("/api/examinations/{id}")
  public void deleteExaminationById(@PathVariable final Long id) {
    this.examinationService.deleteById(id);
  }

  @GetMapping("/api/examinations/statuses")
  public List<String> getExaminationStatuses() {
    return this.examinationService.getExaminationStatuses();
  }
}
