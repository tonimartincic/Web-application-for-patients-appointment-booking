package hr.fer.snarp.domain.department;

import lombok.Data;

@Data
public class DepartmentRequest {

  private Long id;

  private String type;

  private Long hospitalId;
}
