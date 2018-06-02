package hr.fer.snarp.service.department;

import com.google.common.collect.Lists;
import hr.fer.snarp.domain.department.Department;
import hr.fer.snarp.domain.department.DepartmentRequest;
import hr.fer.snarp.domain.department.DepartmentResponse;
import hr.fer.snarp.enumeration.DepartmentType;
import hr.fer.snarp.repository.DepartmentRepository;
import hr.fer.snarp.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepartmentServiceImpl implements DepartmentService {

  private final DepartmentRepository departmentRepository;

  private final HospitalRepository hospitalRepository;

  @Autowired
  public DepartmentServiceImpl(final DepartmentRepository departmentRepository, final HospitalRepository hospitalRepository) {
    this.departmentRepository = departmentRepository;
    this.hospitalRepository = hospitalRepository;
  }

  @Override
  public List<DepartmentResponse> getAll() {
    return getDepartmentResponses(Lists.newArrayList(this.departmentRepository.findAll()));
  }

  @Override
  public DepartmentResponse getById(final Long id) {
    return getDepartmentResponse(this.departmentRepository.findOne(id));
  }

  @Override
  public DepartmentResponse add(final DepartmentRequest departmentRequest) {
    final Department department = new Department(departmentRequest);

    department.setHospital(this.hospitalRepository.findOne(departmentRequest.getHospitalId()));

    return getDepartmentResponse(this.departmentRepository.save(department));
  }

  @Override
  public DepartmentResponse edit(final DepartmentRequest departmentRequest) {
    final Department departmentFromDatabase = this.departmentRepository.findOne(departmentRequest.getId());

    departmentFromDatabase.setType(DepartmentType.getByDescription(departmentRequest.getType()));
    departmentFromDatabase.setHospital(this.hospitalRepository.findOne(departmentRequest.getHospitalId()));

    return getDepartmentResponse(this.departmentRepository.save(departmentFromDatabase));
  }

  @Override
  public void deleteById(final Long id) {
    this.departmentRepository.delete(id);
  }

  @Override
  public List<String> getDepartmentTypes() {
    return Arrays.stream(DepartmentType.values()).map(DepartmentType::getDescription).collect(Collectors.toList());
  }

  private List<DepartmentResponse> getDepartmentResponses(final List<Department> departments) {
    final List<DepartmentResponse> departmentResponses = new ArrayList<>();

    for (final Department department : departments) {
      departmentResponses.add(getDepartmentResponse(department));
    }

    return departmentResponses;
  }

  private DepartmentResponse getDepartmentResponse(final Department department) {
    return new DepartmentResponse(department);
  }
}
