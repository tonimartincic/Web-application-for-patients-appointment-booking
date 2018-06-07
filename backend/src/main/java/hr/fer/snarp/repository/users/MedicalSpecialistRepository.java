package hr.fer.snarp.repository.users;

import hr.fer.snarp.domain.hospital.Hospital;
import hr.fer.snarp.domain.users.medicalSpecialist.MedicalSpecialist;
import hr.fer.snarp.enumeration.DepartmentType;
import org.springframework.data.repository.CrudRepository;

public interface MedicalSpecialistRepository extends CrudRepository<MedicalSpecialist, Long> {

  MedicalSpecialist findByMailAndPassword(String mail, String password);

  MedicalSpecialist findByHospitalAndDepartmentType(Hospital hospital, DepartmentType departmentType);
}
