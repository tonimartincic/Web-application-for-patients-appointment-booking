package hr.fer.snarp.controller.department;

import hr.fer.snarp.service.department.DepartmentService;
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

  @GetMapping("/api/departments/types")
  public List<String> getDepartmentTypes() {
    return this.departmentService.getDepartmentTypes();
  }
}
