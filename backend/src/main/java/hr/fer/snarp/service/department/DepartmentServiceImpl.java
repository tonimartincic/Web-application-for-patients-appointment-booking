package hr.fer.snarp.service.department;

import com.google.common.collect.Lists;
import hr.fer.snarp.enumeration.DepartmentType;
import hr.fer.snarp.repository.hospital.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepartmentServiceImpl implements DepartmentService {

  @Override
  public List<String> getDepartmentTypes() {
    return Arrays.stream(DepartmentType.values()).map(DepartmentType::getDescription).collect(Collectors.toList());
  }
}
