package hr.fer.snarp.service.examination;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.examanation.Examination;
import hr.fer.snarp.domain.examanation.ExaminationRequest;
import hr.fer.snarp.domain.examanation.ExaminationResponse;
import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.domain.users.patient.Patient;
import hr.fer.snarp.enumeration.ExaminationStatus;
import hr.fer.snarp.enumeration.UserType;
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
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExaminationServiceImpl implements ExaminationService {

  private final ExaminationRepository examinationRepository;

  private final PatientRepository patientRepository;

  private final PatientService patientService;

  private final MedicalSpecialistRepository medicalSpecialistRepository;

  private final HospitalRepository hospitalRepository;

  private final ReferralRepository referralRepository;

  private final ReferralService referralService;

  @Autowired
  public ExaminationServiceImpl(
    ExaminationRepository examinationRepository,
    PatientRepository patientRepository,
    PatientService patientService,
    MedicalSpecialistRepository medicalSpecialistRepository,
    HospitalRepository hospitalRepository,
    ReferralRepository referralRepository,
    ReferralService referralService) {

    this.examinationRepository = examinationRepository;
    this.patientRepository = patientRepository;
    this.patientService = patientService;
    this.medicalSpecialistRepository = medicalSpecialistRepository;
    this.hospitalRepository = hospitalRepository;
    this.referralRepository = referralRepository;
    this.referralService = referralService;
  }

  @Override
  public List<ExaminationResponse> getAll(Long userId, String userType) {
    if(UserType.PATIENT.equals(UserType.getByName(userType))) {
      return getExaminationResponsesForPatient(userId);
    } else if(UserType.MEDICAL_SPECIALIST.equals(UserType.getByName(userType))) {
      return getExaminationResponsesForMedicalSpecialist(userId);
    }

    return Collections.emptyList();
  }

  private List<ExaminationResponse> getExaminationResponsesForPatient(Long userId) {
    Patient patient = this.patientRepository.findOne(userId);
    return getExaminationResponses(Lists.newArrayList(this.examinationRepository.findAllByPatient(patient)));
  }

  private List<ExaminationResponse> getExaminationResponsesForMedicalSpecialist(Long userId) {
    MedicalSpecialist medicalSpecialist = this.medicalSpecialistRepository.findOne(userId);
    return getExaminationResponses(Lists.newArrayList(this.examinationRepository.findAllByMedicalSpecialist(medicalSpecialist)));
  }

  @Override
  public ExaminationResponse getById(Long id) {
    return getExaminationResponse(this.examinationRepository.findOne(id));
  }

  @Override
  public ExaminationResponse add(ExaminationRequest examinationRequest) {
    examinationRequest.setStatus(ExaminationStatus.TERM_NOT_DEFINED.getName());

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
    Patient patient = this.patientRepository.findOne(examinationRequest.getPatientId());
    examination.setPatient(patient);

    Hospital hospital = this.hospitalRepository.findOne(examinationRequest.getHospitalId());
    examination.setHospital(hospital);

    Referral referral = this.referralRepository.findOne(examinationRequest.getReferralId());
    examination.setReferral(referral);

    MedicalSpecialist medicalSpecialist = this.medicalSpecialistRepository.findByHospitalAndDepartmentType(hospital, referral.getDepartmentType());
    examination.setMedicalSpecialist(medicalSpecialist);
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
    ExaminationResponse examinationResponse = new ExaminationResponse(examination);

    examinationResponse.setReferral(this.referralService.getReferralResponse(examination.getReferral()));

    return examinationResponse;
  }
}
