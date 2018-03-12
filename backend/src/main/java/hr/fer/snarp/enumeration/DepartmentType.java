package hr.fer.snarp.enumeration;

public enum DepartmentType {

  ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE("Anesteziologija, reanimatologija i intenzivno liječenje"),
  CARDIOLOGY("Kardiologija"),
  OTORHINOLARYNGOLOGY("Otorinolaringologija"),
  CARDIOVASCULAR_DISEASES("Bolesti srca i krvnih žila"),
  CHIRURGY("Kirurgija"),
  NEUROCHIRURGY("Neurokirurgija"),
  NEUROLOGY("Neurologija"),
  EYE_DISEASES("Očne bolesti"),
  ONCOLOGY("Onkologija"),
  PAEDIATRICS("Pedijatrija"),
  PSYCHIATRY("Psihijatrija"),
  PSYCHOLOGICAL_MEDICINE("Psihološka medicina"),
  RHEUMATIC_DISEASES_AND_REHABILITATION("Reumatske bolesti i rehabilitacija"),
  INTERNAL_MEDICINE("Interna medicina"),
  UROLOGY("Urologija"),
  DIAGNOSTIC_AND_INTERVENTIONAL_RADIOLOGY("Dijagnostička i intervencijska radiologija"),
  CLINICAL_AND_MOLECULAR_MICROBIOLOGY("Klinička i molekularna mikrobiologija"),
  LABORATORY_DIAGNOSTICS("Laboratorijska dijagnostika"),
  NUCLEAR_MEDICINE_AND_RADIATION_PROTECTION("Nuklearna medicina i zaštita od zračenja"),
  PATHOLOGY_AND_CYTOLOGY("Patologija i citologija"),
  TRANSFUSION_MEDICINE_AND_TRANSPLANTATION_BIOLOGY("Transfuzijska medicina i transplantacijska biologija"),
  URGENT_MEDICAL_CENTER("Hitni bolnički prijem"),;

  private final String description;

  DepartmentType(final String description) {
    this.description = description;
  }

  public String getDescription() {
    return description;
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
