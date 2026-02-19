// Formulář pro studijní zkušenosti.
function EducationForm({
  school,
  fieldOfStudy,
  dateFrom,
  dateTo,
  onSchoolChange,
  onFieldOfStudyChange,
  onDateFromChange,
  onDateToChange,
}) {
  return (
    <div className="form-section">
      <h2>Vzdělání</h2>

      <div className="form-field">
        <label>Název školy</label>
        <input
          type="text"
          value={school}
          onChange={(e) => onSchoolChange(e.target.value)}
          placeholder="Vysoká škola ekonomická"
        />
      </div>

      <div className="form-field">
        <label>Obor</label>
        <input
          type="text"
          value={fieldOfStudy}
          onChange={(e) => onFieldOfStudyChange(e.target.value)}
          placeholder="Informatika"
        />
      </div>

      <div className="form-field">
        <label>Datum od</label>
        <input
          type="text"
          value={dateFrom}
          onChange={(e) => onDateFromChange(e.target.value)}
          placeholder="2018"
        />
      </div>

      <div className="form-field">
        <label>Datum do</label>
        <input
          type="text"
          value={dateTo}
          onChange={(e) => onDateToChange(e.target.value)}
          placeholder="2022"
        />
      </div>
    </div>
  );
}

export default EducationForm;
