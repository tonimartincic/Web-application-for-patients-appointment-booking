package hr.fer.snarp.enumeration;

public enum ReferralType {

  ADVISORY_HEALTH_CARE(1L, "A – Konzilijarna zdravstvena zaštita"),
  HOSPITALIZATION(2L, "B – Bolničko liječenje"),
  SPECIALIST_HEALTH_CARE(3L, "C – Specijalistička zdravstvena zaštita"),
  OUTPATIENT_TREATMENT(4L, "D – Ambulantno liječenje");

  private final Long id;

  private final String name;

  ReferralType(final Long id, final String name) {
    this.id = id;
    this.name = name;
  }

  public Long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public static ReferralType getByName(final String name) {
    switch (name) {
      case "A – Konzilijarna zdravstvena zaštita":
        return ReferralType.ADVISORY_HEALTH_CARE;
      case "B – Bolničko liječenje":
        return ReferralType.HOSPITALIZATION;
      case "C – Specijalistička zdravstvena zaštita":
        return ReferralType.SPECIALIST_HEALTH_CARE;
      default:
        return ReferralType.OUTPATIENT_TREATMENT;
    }
  }
}
