package hr.fer.snarp.controller;

import hr.fer.snarp.domain.department.DepartmentRequest;
import hr.fer.snarp.domain.department.DepartmentResponse;
import hr.fer.snarp.service.DepartmentService;
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
public class DepartmentController {

  private final DepartmentService departmentService;

  @Autowired
  public DepartmentController(final DepartmentService departmentService) {
    this.departmentService = departmentService;
  }

  @GetMapping("/api/departments")
  public List<DepartmentResponse> getAllDepartments() {
    return this.departmentService.getAll();
  }

  @GetMapping("/api/departments/{id}")
  public DepartmentResponse getDepartmentById(@PathVariable final Long id) {
    return this.departmentService.getById(id);
  }

  @PostMapping("/api/departments")
  public DepartmentResponse addNewDepartment(@RequestBody final DepartmentRequest departmentRequest) {
    return this.departmentService.add(departmentRequest);
  }

  @PutMapping("/api/departments")
  public DepartmentResponse editDepartment(@RequestBody final DepartmentRequest departmentRequest) {
    return this.departmentService.edit(departmentRequest);
  }

  @DeleteMapping("/api/departments/{id}")
  public void deleteDepartmentById(@PathVariable final Long id) {
    this.departmentService.deleteById(id);
  }
}
