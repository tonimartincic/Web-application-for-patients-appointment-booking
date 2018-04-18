package hr.fer.snarp.controller;

import hr.fer.snarp.domain.hospital.HospitalRequest;
import hr.fer.snarp.domain.hospital.HospitalResponse;
import hr.fer.snarp.service.HospitalService;
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
public class HospitalController {

  private final HospitalService hospitalService;

  @Autowired
  public HospitalController(final HospitalService hospitalService) {
    this.hospitalService = hospitalService;
  }

  @GetMapping("/api/hospitals")
  public List<HospitalResponse> getAllHospitals() {
    return this.hospitalService.getAll();
  }

  @GetMapping("/api/hospitals/{id}")
  public HospitalResponse getHospitalById(@PathVariable final Long id) {
    return this.hospitalService.getById(id);
  }

  @PostMapping("/api/hospitals")
  public HospitalResponse addNewHospital(@RequestBody final HospitalRequest hospitalRequest) {
    return this.hospitalService.add(hospitalRequest);
  }

  @PutMapping("/api/hospitals")
  public HospitalResponse editHospital(@RequestBody final HospitalRequest hospitalRequest) {
    return this.hospitalService.edit(hospitalRequest);
  }

  @DeleteMapping("/api/hospitals/{id}")
  public void deleteHospitalById(@PathVariable final Long id) {
    this.hospitalService.deleteById(id);
  }
}
