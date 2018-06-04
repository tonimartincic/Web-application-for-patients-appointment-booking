package hr.fer.snarp.controller.referral;

import hr.fer.snarp.domain.referral.ReferralRequest;
import hr.fer.snarp.domain.referral.ReferralResponse;
import hr.fer.snarp.service.referral.ReferralService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReferralController {

  private final ReferralService referralService;

  @Autowired
  public ReferralController(final ReferralService referralService) {
    this.referralService = referralService;
  }

  @GetMapping("/api/referrals/{userId}/{userType}")
  public List<ReferralResponse> getAllReferrals(@PathVariable Long userId, @PathVariable String userType) {
    return this.referralService.getAll(userId, userType);
  }

  @GetMapping("/api/referrals/{id}")
  public ReferralResponse getReferralById(@PathVariable final Long id) {
    return this.referralService.getById(id);
  }

  @PostMapping("/api/referrals")
  public ReferralResponse addReferral(@RequestBody final ReferralRequest referralRequest) {
    return this.referralService.add(referralRequest);
  }

  @PutMapping("/api/referrals")
  public ReferralResponse editReferral(@RequestBody final ReferralRequest referralRequest) {
    return this.referralService.edit(referralRequest);
  }

  @DeleteMapping("/api/referrals/{id}")
  public void deleteReferralById(@PathVariable final Long id) {
    this.referralService.deleteById(id);
  }

  @GetMapping("/api/referrals/types")
  public List<String> getReferralTypes() {
    return this.referralService.getReferralTypes();
  }
}
