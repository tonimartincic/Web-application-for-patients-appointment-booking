package hr.fer.snarp.service.hospital;

import hr.fer.snarp.domain.hospital.HospitalRequest;
import hr.fer.snarp.domain.hospital.HospitalResponse;

import java.util.List;

public interface HospitalService {

  List<HospitalResponse> getAll();

  HospitalResponse getById(Long id);

  HospitalResponse add(HospitalRequest hospitalRequest);

  HospitalResponse edit(HospitalRequest hospitalRequest);

  void deleteById(Long id);
}
