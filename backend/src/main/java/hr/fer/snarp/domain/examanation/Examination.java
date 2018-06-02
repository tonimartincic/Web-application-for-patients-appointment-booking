package hr.fer.snarp.domain.examanation;

import hr.fer.snarp.enumeration.ExaminationStatus;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Examination {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  private ExaminationStatus status;

  public Examination(ExaminationRequest examinationRequest) {
  }
}
