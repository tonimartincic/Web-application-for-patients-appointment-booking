package hr.fer.snarp.enumeration;

public enum UserType {

  PATIENT("Pacijent"),
  GENERAL_PRACTITIONER("Liječnik opće medicine"),
  MEDICAL_SPECIALIST("Liječnik specijalist"),
  ADMINISTRATOR("Administrator");

  private final String name;

  UserType(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public static UserType getByName(final String name) {
    switch (name) {
      case "Pacijent":
        return UserType.PATIENT;
      case "Liječnik opće medicine":
        return UserType.GENERAL_PRACTITIONER;
      case "Liječnik specijalist":
        return UserType.MEDICAL_SPECIALIST;
      default:
        return UserType.ADMINISTRATOR;
    }
  }
}
