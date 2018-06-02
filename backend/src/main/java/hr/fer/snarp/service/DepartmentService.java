package hr.fer.snarp.service;

import hr.fer.snarp.domain.department.DepartmentRequest;
import hr.fer.snarp.domain.department.DepartmentResponse;

import java.util.List;

public interface DepartmentService {

  List<DepartmentResponse> getAll();

  DepartmentResponse getById(Long id);

  DepartmentResponse add(DepartmentRequest departmentRequest);

  DepartmentResponse edit(DepartmentRequest departmentRequest);

  void deleteById(Long id);

  List<String> getDepartmentTypes();
}
