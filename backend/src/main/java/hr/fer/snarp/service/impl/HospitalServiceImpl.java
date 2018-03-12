package hr.fer.snarp.service.impl;

import hr.fer.snarp.repository.HospitalRepository;
import hr.fer.snarp.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HospitalServiceImpl implements HospitalService {

  private final HospitalRepository hospitalRepository;

  @Autowired
  public HospitalServiceImpl(HospitalRepository hospitalRepository) {
    this.hospitalRepository = hospitalRepository;
  }
}
