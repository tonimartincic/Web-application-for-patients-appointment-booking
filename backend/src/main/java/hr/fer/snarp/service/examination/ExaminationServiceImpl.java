package hr.fer.snarp.service.examination;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.examanation.Examination;
import hr.fer.snarp.domain.examanation.ExaminationRequest;
import hr.fer.snarp.domain.examanation.ExaminationResponse;
import hr.fer.snarp.enumeration.ExaminationStatus;
import hr.fer.snarp.repository.examination.ExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExaminationServiceImpl implements ExaminationService {

  private final ExaminationRepository examinationRepository;

  @Autowired
  public ExaminationServiceImpl(ExaminationRepository examinationRepository) {
    this.examinationRepository = examinationRepository;
  }

  @Override
  public List<ExaminationResponse> getAll() {
    return getExaminationResponses(Lists.newArrayList(this.examinationRepository.findAll()));
  }

  @Override
  public ExaminationResponse getById(Long id) {
    return getExaminationResponse(this.examinationRepository.findOne(id));
  }

  @Override
  public ExaminationResponse add(ExaminationRequest examinationRequest) {
    return getExaminationResponse(this.examinationRepository.save(new Examination(examinationRequest)));
  }

  @Override
  public ExaminationResponse edit(ExaminationRequest examinationRequest) {
    return getExaminationResponse(this.examinationRepository.save(new Examination(examinationRequest)));
  }

  @Override
  public void deleteById(Long id) {
    this.examinationRepository.delete(id);
  }

  @Override
  public List<String> getExaminationStatuses() {
    return Arrays.stream(ExaminationStatus.values()).map(ExaminationStatus::getName).collect(Collectors.toList());
  }

  private List<ExaminationResponse> getExaminationResponses(final List<Examination> examinations) {
    final List<ExaminationResponse> examinationResponses = new ArrayList<>();

    for (final Examination examination : examinations) {
      examinationResponses.add(getExaminationResponse(examination));
    }

    return examinationResponses;
  }

  private ExaminationResponse getExaminationResponse(final Examination examination) {
    return new ExaminationResponse(examination);
  }
}
