package hr.fer.snarp.service.referral;

import hr.fer.snarp.domain.referral.ReferralRequest;
import hr.fer.snarp.domain.referral.ReferralResponse;

import java.util.List;

public interface ReferralService {

  List<ReferralResponse> getAll();

  ReferralResponse getById(Long id);

  ReferralResponse add(ReferralRequest referralRequest);

  ReferralResponse edit(ReferralRequest referralRequest);

  void deleteById(Long id);

  List<String> getReferralTypes();
}
