package hr.fer.snarp.enumeration;

public enum ReferralType {

  ADVISORY_HEALTH_CARE_A1(1L, "A1 - Konzilijarni pregled", "A – Konzilijarna zdravstvena zaštita"),
  ADVISORY_HEALTH_CARE_A2(2L, "A2 - Kontrolni konzilijarni pregled", "A – Konzilijarna zdravstvena zaštita"),
  ADVISORY_HEALTH_CARE_A3(3L, "A3 - Dijagnostička pretraga", "A – Konzilijarna zdravstvena zaštita"),
  HOSPITALIZATION_B(4L, "B – Bolničko liječenje", "B – Bolničko liječenje"),
  SPECIALIST_HEALTH_CARE_C1(5L, "C1 - Pregled i cjelovita obrada u specijalističkoj zdravstvenoj zaštiti", "C – Specijalistička zdravstvena zaštita"),
  SPECIALIST_HEALTH_CARE_C2(6L, "C2 - Pregled i obrada kroz Objedinjeni hitni bolnički prijam", "C – Specijalistička zdravstvena zaštita"),
  SPECIALIST_HEALTH_CARE_C3(7L, "C3 - Prijeoperativna obrada za nepokretne i/ili teško pokretne pacijente", "C – Specijalistička zdravstvena zaštita"),
  OUTPATIENT_TREATMENT_D1(8L, "D1 - Ambulantno liječenje", "D – Ambulantno liječenje"),
  OUTPATIENT_TREATMENT_D2(9L, "D2 - Dnevna bolnica", "D – Ambulantno liječenje");

  private final Long id;

  private final String name;

  private final String group;

  ReferralType(final Long id, final String name, final String group) {
    this.id = id;
    this.name = name;
    this.group = group;
  }

  public Long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public static ReferralType getByName(final String name) {
    switch (name) {
      case "A1 - Konzilijarni pregled":
        return ReferralType.ADVISORY_HEALTH_CARE_A1;
      case "A2 - Kontrolni konzilijarni pregled":
        return ReferralType.ADVISORY_HEALTH_CARE_A2;
      case "A3 - Dijagnostička pretraga":
        return ReferralType.ADVISORY_HEALTH_CARE_A3;
      case "B – Bolničko liječenje":
        return ReferralType.HOSPITALIZATION_B;
      case "C1 - Pregled i cjelovita obrada u specijalističkoj zdravstvenoj zaštiti":
        return ReferralType.SPECIALIST_HEALTH_CARE_C1;
      case "C2 - Pregled i obrada kroz Objedinjeni hitni bolnički prijam":
        return ReferralType.SPECIALIST_HEALTH_CARE_C2;
      case "C3 - Prijeoperativna obrada za nepokretne i/ili teško pokretne pacijente":
        return ReferralType.SPECIALIST_HEALTH_CARE_C3;
      case "D1 - Ambulantno liječenje":
        return ReferralType.OUTPATIENT_TREATMENT_D1;
      default:
        return ReferralType.OUTPATIENT_TREATMENT_D2;
    }
  }
}
