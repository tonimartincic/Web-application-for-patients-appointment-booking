package hr.fer.snarp.domain.department;

import lombok.Data;

@Data
public class DepartmentResponse {

  private Long id;

  private String type;

  private Long hospitalId;

  public DepartmentResponse(final Department department) {
    this.id = department.getId();
    this.type = department.getType().getDescription();
    this.hospitalId = department.getHospital().getId();
  }
}
