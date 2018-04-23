package hr.fer.snarp.enumeration;

public enum UserType {

  PATIENT(1L, "Pacijent"),
  GENERAL_PRACTITIONER(2L, "Specijalist obiteljske medicine"),
  MEDICAL_SPECIALIST(3L, "Liječnik specijalist"),
  ADMINISTRATOR(4L, "Administrator");

  private final Long id;

  private final String name;

  UserType(final Long id, final String name) {
    this.id = id;
    this.name = name;
  }

  public Long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public static UserType getByName(final String name) {
    switch (name) {
      case "Pacijent":
        return UserType.PATIENT;
      case "Specijalist obiteljske medicine":
        return UserType.GENERAL_PRACTITIONER;
      case "Liječnik specijalist":
        return UserType.MEDICAL_SPECIALIST;
      default:
        return UserType.ADMINISTRATOR;
    }
  }
}
