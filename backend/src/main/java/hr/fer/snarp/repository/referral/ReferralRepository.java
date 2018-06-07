package hr.fer.snarp.repository.referral;

import hr.fer.snarp.domain.referral.Referral;
import hr.fer.snarp.domain.users.generalPractitioner.GeneralPractitioner;
import hr.fer.snarp.domain.users.patient.Patient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReferralRepository extends CrudRepository<Referral, Long> {

  List<Referral> findAllByPatient(Patient patient);

  List<Referral> findAllByGeneralPractitioner(GeneralPractitioner generalPractitioner);
}
