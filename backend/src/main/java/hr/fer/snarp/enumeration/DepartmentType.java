package hr.fer.snarp.enumeration;

public enum DepartmentType {

  ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE(1L, "Anesteziologija, reanimatologija i intenzivno liječenje"),
  CARDIOLOGY(2L, "Kardiologija"),
  OTORHINOLARYNGOLOGY(3L, "Otorinolaringologija"),
  CARDIOVASCULAR_DISEASES(4L, "Bolesti srca i krvnih žila"),
  CHIRURGY(5L, "Kirurgija"),
  NEUROCHIRURGY(6L, "Neurokirurgija"),
  NEUROLOGY(7L, "Neurologija"),
  EYE_DISEASES(8L, "Očne bolesti"),
  ONCOLOGY(9L, "Onkologija"),
  PAEDIATRICS(10L, "Pedijatrija"),
  PSYCHIATRY(11L, "Psihijatrija"),
  PSYCHOLOGICAL_MEDICINE(12L, "Psihološka medicina"),
  RHEUMATIC_DISEASES_AND_REHABILITATION(13L, "Reumatske bolesti i rehabilitacija"),
  INTERNAL_MEDICINE(14L, "Interna medicina"),
  UROLOGY(15L, "Urologija"),
  DIAGNOSTIC_AND_INTERVENTIONAL_RADIOLOGY(16L, "Dijagnostička i intervencijska radiologija"),
  CLINICAL_AND_MOLECULAR_MICROBIOLOGY(17L, "Klinička i molekularna mikrobiologija"),
  LABORATORY_DIAGNOSTICS(18L, "Laboratorijska dijagnostika"),
  NUCLEAR_MEDICINE_AND_RADIATION_PROTECTION(19L, "Nuklearna medicina i zaštita od zračenja"),
  PATHOLOGY_AND_CYTOLOGY(20L, "Patologija i citologija"),
  TRANSFUSION_MEDICINE_AND_TRANSPLANTATION_BIOLOGY(21L, "Transfuzijska medicina i transplantacijska biologija"),
  URGENT_MEDICAL_CENTER(22L, "Hitni bolnički prijem"),;

  private final Long id;

  private final String description;

  DepartmentType(final Long id, final String description) {
    this.id = id;
    this.description = description;
  }

  public Long getId() {
    return this.id;
  }

  public String getDescription() {
    return this.description;
  }

  public static DepartmentType getByDescription(final String description) {
    switch (description) {
      case "Anesteziologija, reanimatologija i intenzivno liječenje":
        return DepartmentType.ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE;
      case "Kardiologija":
        return DepartmentType.CARDIOLOGY;
      case "Otorinolaringologija":
        return DepartmentType.OTORHINOLARYNGOLOGY;
      case "Bolesti srca i krvnih žila":
        return DepartmentType.CARDIOVASCULAR_DISEASES;
      case "Kirurgija":
        return DepartmentType.CHIRURGY;
      case "Neurokirurgija":
        return DepartmentType.NEUROCHIRURGY;
      case "Neurologija":
        return DepartmentType.NEUROLOGY;
      case "Očne bolesti":
        return DepartmentType.EYE_DISEASES;
      case "Onkologija":
        return DepartmentType.ONCOLOGY;
      case "Pedijatrija":
        return DepartmentType.PAEDIATRICS;
      case "Psihijatrija":
        return DepartmentType.PSYCHIATRY;
      case "Psihološka medicina":
        return DepartmentType.PSYCHOLOGICAL_MEDICINE;
      case "Reumatske bolesti i rehabilitacija":
        return DepartmentType.RHEUMATIC_DISEASES_AND_REHABILITATION;
      case "Interna medicina":
        return DepartmentType.INTERNAL_MEDICINE;
      case "Urologija":
        return DepartmentType.UROLOGY;
      case "Dijagnostička i intervencijska radiologija":
        return DepartmentType.DIAGNOSTIC_AND_INTERVENTIONAL_RADIOLOGY;
      case "Klinička i molekularna mikrobiologija":
        return DepartmentType.CLINICAL_AND_MOLECULAR_MICROBIOLOGY;
      case "Laboratorijska dijagnostika":
        return DepartmentType.LABORATORY_DIAGNOSTICS;
      case "Nuklearna medicina i zaštita od zračenja":
        return DepartmentType.NUCLEAR_MEDICINE_AND_RADIATION_PROTECTION;
      case "Patologija i citologija":
        return DepartmentType.PATHOLOGY_AND_CYTOLOGY;
      case "Transfuzijska medicina i transplantacijska biologija":
        return DepartmentType.TRANSFUSION_MEDICINE_AND_TRANSPLANTATION_BIOLOGY;
      default:
        return DepartmentType.URGENT_MEDICAL_CENTER;
    }
  }
}
