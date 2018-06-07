package hr.fer.snarp.service.hospital;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.addressData.AddressData;
import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.hospital.HospitalRequest;
import hr.fer.snarp.domain.hospital.HospitalResponse;
import hr.fer.snarp.repository.hospital.HospitalRepository;
import hr.fer.snarp.service.addressData.AddressDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HospitalServiceImpl implements HospitalService {

  private final HospitalRepository hospitalRepository;

  private final AddressDataService addressDataService;

  @Autowired
  public HospitalServiceImpl(final HospitalRepository hospitalRepository, final AddressDataService addressDataService) {
    this.hospitalRepository = hospitalRepository;
    this.addressDataService = addressDataService;
  }

  @Override
  public List<HospitalResponse> getAll() {
    return getHospitalResponses(Lists.newArrayList(this.hospitalRepository.findAll()));
  }

  @Override
  public HospitalResponse getById(final Long id) {
    return getHospitalResponse(this.hospitalRepository.findOne(id));
  }

  @Override
  public HospitalResponse add(final HospitalRequest hospitalRequest) {
    final Hospital hospital = new Hospital(hospitalRequest);
    final AddressData addressData =
      this.addressDataService.add(
        new AddressData(
          hospitalRequest.getCity(),
          hospitalRequest.getPostalCode(),
          hospitalRequest.getStreet(),
          hospitalRequest.getStreetNumber()
        )
      );

    hospital.setAddressData(addressData);

    return getHospitalResponse(this.hospitalRepository.save(hospital));
  }

  @Override
  public HospitalResponse edit(final HospitalRequest hospitalRequest) {
    final Hospital hospitalFromDatabase = this.hospitalRepository.findOne(hospitalRequest.getId());

    hospitalFromDatabase.setName(hospitalRequest.getName());
    hospitalFromDatabase.setMail(hospitalRequest.getMail());
    hospitalFromDatabase.setPhoneNumber(hospitalRequest.getPhoneNumber());

    final AddressData addressData =
      this.addressDataService.add(
        new AddressData(
          hospitalRequest.getCity(),
          hospitalRequest.getPostalCode(),
          hospitalRequest.getStreet(),
          hospitalRequest.getStreetNumber()
        )
      );

    hospitalFromDatabase.setAddressData(addressData);

    return getHospitalResponse(this.hospitalRepository.save(hospitalFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.hospitalRepository.delete(id);
  }

  private List<HospitalResponse> getHospitalResponses(final List<Hospital> hospitals) {
    final List<HospitalResponse> hospitalResponses = new ArrayList<>();

    for (final Hospital hospital : hospitals) {
      hospitalResponses.add(getHospitalResponse(hospital));
    }

    return hospitalResponses;
  }

  private HospitalResponse getHospitalResponse(final Hospital hospital) {
    return new HospitalResponse(hospital);
  }
}
