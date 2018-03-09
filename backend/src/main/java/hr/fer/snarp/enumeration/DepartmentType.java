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
}
