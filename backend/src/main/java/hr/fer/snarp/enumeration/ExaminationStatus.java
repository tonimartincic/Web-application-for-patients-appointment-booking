package hr.fer.snarp.enumeration;

public enum ExaminationStatus {

  TERM_DEFINED(1L, "Termin definiran"),
  TERM_NOT_DEFINED(1L, "Termin nije definiran"),
  EXAMINATION_DONE(1L, "Pregled obavljen"),
  EXAMINATION_CANCELED(1L, "Pregled otkazan");

  private final Long id;

  private final String name;

  ExaminationStatus(Long id, String name) {
    this.id = id;
    this.name = name;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public static ExaminationStatus getByName(final String name) {
    switch (name) {
      case "Termin definiran":
        return ExaminationStatus.TERM_DEFINED;
      case "Termin nije definiran":
        return ExaminationStatus.TERM_NOT_DEFINED;
      case "Pregled obavljen":
        return ExaminationStatus.EXAMINATION_DONE;
      default:
        return ExaminationStatus.EXAMINATION_CANCELED;
    }
  }
}
