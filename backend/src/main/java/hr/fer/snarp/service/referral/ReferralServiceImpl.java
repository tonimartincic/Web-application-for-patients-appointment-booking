package hr.fer.snarp.service.referral;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.referral.ReferralRequest;
import hr.fer.snarp.domain.referral.ReferralResponse;
import hr.fer.snarp.enumeration.DepartmentType;
import hr.fer.snarp.enumeration.ReferralType;
import hr.fer.snarp.repository.ReferralRepository;
import hr.fer.snarp.repository.users.GeneralPractitionerRepository;
import hr.fer.snarp.repository.users.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReferralServiceImpl implements ReferralService {

  private final ReferralRepository referralRepository;

  private final PatientRepository patientRepository;

  private final GeneralPractitionerRepository generalPractitionerRepository;

  @Autowired
  public ReferralServiceImpl(
    final ReferralRepository referralRepository,
    final PatientRepository patientRepository,
    final GeneralPractitionerRepository generalPractitionerRepository) {

    this.referralRepository = referralRepository;
    this.patientRepository = patientRepository;
    this.generalPractitionerRepository = generalPractitionerRepository;
  }

  @Override
  public List<ReferralResponse> getAll() {
    return getReferralResponses(Lists.newArrayList(this.referralRepository.findAll()));
  }

  @Override
  public ReferralResponse getById(final Long id) {
    return getReferralResponse(this.referralRepository.findOne(id));
  }

  @Override
  public ReferralResponse add(final ReferralRequest referralRequest) {
    final Referral referral = new Referral(referralRequest);

    referral.setPatient(this.patientRepository.findOne(referralRequest.getPatientId()));
    referral.setGeneralPractitioner(this.generalPractitionerRepository.findOne(referralRequest.getGeneralPractitionerId()));

    return getReferralResponse(this.referralRepository.save(referral));
  }

  @Override
  public ReferralResponse edit(final ReferralRequest referralRequest) {
    final Referral referralFromDatabase = this.referralRepository.findOne(referralRequest.getId());

    referralFromDatabase.setReferralType(ReferralType.getByName(referralRequest.getReferralType()));
    referralFromDatabase.setDepartmentType(DepartmentType.getByDescription(referralRequest.getDepartmentType()));
    referralFromDatabase.setPatient(this.patientRepository.findOne(referralRequest.getPatientId()));
    referralFromDatabase.setGeneralPractitioner(this.generalPractitionerRepository.findOne(referralRequest.getGeneralPractitionerId()));
    referralFromDatabase.setDiagnosis(referralRequest.getDiagnosis());
    referralFromDatabase.setRemark(referralRequest.getRemark());

    return getReferralResponse(this.referralRepository.save(referralFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.referralRepository.delete(id);
  }

  @Override
  public List<String> getReferralTypes() {
    return Arrays.stream(ReferralType.values()).map(ReferralType::getName).collect(Collectors.toList());
  }

  private List<ReferralResponse> getReferralResponses(final List<Referral> referrals) {
    final List<ReferralResponse> referralResponses = new ArrayList<>();

    for (final Referral referral : referrals) {
      referralResponses.add(getReferralResponse(referral));
    }

    return referralResponses;
  }

  private ReferralResponse getReferralResponse(final Referral referral) {
    return new ReferralResponse(referral);
  }
}
