package hr.fer.snarp.domain.users.patient;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.snarp.domain.users.user.UserRequest;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PatientRequest extends UserRequest {

  private String city;

  private Long postalCode;

  private String street;

  private Long streetNumber;

  private String OIB;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dateOfBirth;

  private String sex;
}
