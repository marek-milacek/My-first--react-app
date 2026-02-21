import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import CVPreview from "./components/CVPreview";

export default function App() {
  // --- Základní informace ---
  // React HOOKS - useState
  // useState je funkce, která vrací pole se dvěma hodnotami:
  // 1. aktuální hodnota stavu
  // 2. funkce pro aktualizaci stavu
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // --- Vzdělání ---
  const [school, setSchool] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [eduDateFrom, setEduDateFrom] = useState("");
  const [eduDateTo, setEduDateTo] = useState("");

  // --- Pracovní zkušenosti ---
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duties, setDuties] = useState("");
  const [expDateFrom, setExpDateFrom] = useState("");
  const [expDateTo, setExpDateTo] = useState("");

  return (
    <div className="app-layout">
      {/* LEVÝ panel: formuláře */}
      <div className="panel panel--form">
        <GeneralInfoForm
          name={name}
          email={email}
          phone={phone}
          onNameChange={setName}
          onEmailChange={setEmail}
          onPhoneChange={setPhone}
        />

        <EducationForm
          school={school}
          fieldOfStudy={fieldOfStudy}
          dateFrom={eduDateFrom}
          dateTo={eduDateTo}
          onSchoolChange={setSchool}
          onFieldOfStudyChange={setFieldOfStudy}
          onDateFromChange={setEduDateFrom}
          onDateToChange={setEduDateTo}
        />

        <ExperienceForm
          company={company}
          position={position}
          duties={duties}
          dateFrom={expDateFrom}
          dateTo={expDateTo}
          onCompanyChange={setCompany}
          onPositionChange={setPosition}
          onDutiesChange={setDuties}
          onDateFromChange={setExpDateFrom}
          onDateToChange={setExpDateTo}
        />
      </div>

      {/* PRAVÝ panel: náhled CV */}
      <div className="panel panel--preview">
        <CVPreview
          name={name}
          email={email}
          phone={phone}
          school={school}
          fieldOfStudy={fieldOfStudy}
          eduDateFrom={eduDateFrom}
          eduDateTo={eduDateTo}
          company={company}
          position={position}
          duties={duties}
          expDateFrom={expDateFrom}
          expDateTo={expDateTo}
        />
      </div>
    </div>
  );
}
