package hr.fer.snarp.service.examination;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.examanation.Examination;
import hr.fer.snarp.domain.examanation.ExaminationRequest;
import hr.fer.snarp.domain.examanation.ExaminationResponse;
import hr.fer.snarp.enumeration.ExaminationStatus;
import hr.fer.snarp.repository.examination.ExaminationRepository;
import hr.fer.snarp.repository.hospital.HospitalRepository;
import hr.fer.snarp.repository.referral.ReferralRepository;
import hr.fer.snarp.repository.users.MedicalSpecialistRepository;
import hr.fer.snarp.repository.users.PatientRepository;
import hr.fer.snarp.service.hospital.HospitalService;
import hr.fer.snarp.service.referral.ReferralService;
import hr.fer.snarp.service.referral.ReferralServiceImpl;
import hr.fer.snarp.service.users.medicalSpecialist.MedicalSpecialistService;
import hr.fer.snarp.service.users.medicalSpecialist.MedicalSpecialistServiceImpl;
import hr.fer.snarp.service.users.patient.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExaminationServiceImpl implements ExaminationService {

  private final ExaminationRepository examinationRepository;

  private final PatientRepository patientRepository;

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  private final HospitalRepository hospitalRepository;

  private final ReferralRepository referralRepository;

  @Autowired
  public ExaminationServiceImpl(
    ExaminationRepository examinationRepository,
    PatientRepository patientRepository,
    MedicalSpecialistRepository medicalSpecialistRepository,
    HospitalRepository hospitalRepository,
    ReferralRepository referralRepository) {
    this.examinationRepository = examinationRepository;
    this.patientRepository = patientRepository;
    this.medicalSpecialistRepository = medicalSpecialistRepository;
    this.hospitalRepository = hospitalRepository;
    this.referralRepository = referralRepository;
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
    Examination examination = new Examination(examinationRequest);
    setParameters(examinationRequest, examination);

    return getExaminationResponse(this.examinationRepository.save(examination));
  }

  @Override
  public ExaminationResponse edit(ExaminationRequest examinationRequest) {
    Examination examination = new Examination(examinationRequest);
    setParameters(examinationRequest, examination);

    return getExaminationResponse(this.examinationRepository.save(examination));
  }

  private void setParameters(ExaminationRequest examinationRequest, Examination examination) {
    examination.setPatient(this.patientRepository.findOne(examinationRequest.getPatientId()));
    examination.setMedicalSpecialist(this.medicalSpecialistRepository.findOne(examinationRequest.getMedicalSpecialistId()));
    examination.setHospital(this.hospitalRepository.findOne(examinationRequest.getHospitalId()));
    examination.setReferral(this.referralRepository.findOne(examinationRequest.getReferralId()));
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
