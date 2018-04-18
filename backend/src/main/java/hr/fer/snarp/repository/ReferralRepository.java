package hr.fer.snarp.repository;

import hr.fer.snarp.domain.referral.Referral;
import org.springframework.data.repository.CrudRepository;

public interface ReferralRepository extends CrudRepository<Referral, Long> {
}
