package hr.fer.snarp.controller;

import hr.fer.snarp.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HospitalController {

  private final HospitalService hospitalService;

  @Autowired
  public HospitalController(HospitalService hospitalService) {
    this.hospitalService = hospitalService;
  }
}
