// Formulář pro pracovní zkušenosti.
function ExperienceForm({
  company,
  position,
  duties,
  dateFrom,
  dateTo,
  onCompanyChange,
  onPositionChange,
  onDutiesChange,
  onDateFromChange,
  onDateToChange,
}) {
  return (
    <div className="form-section">
      <h2>Pracovní zkušenosti</h2>

      <div className="form-field">
        <label>Název společnosti</label>
        <input
          type="text"
          value={company}
          onChange={(e) => onCompanyChange(e.target.value)}
          placeholder="Firma s.r.o."
        />
      </div>

      <div className="form-field">
        <label>Pozice</label>
        <input
          type="text"
          value={position}
          onChange={(e) => onPositionChange(e.target.value)}
          placeholder="Junior vývojář"
        />
      </div>

      <div className="form-field">
        <label>Hlavní pracovní náplň</label>
        {/* textarea je vhodné pro delší text */}
        <textarea
          value={duties}
          onChange={(e) => onDutiesChange(e.target.value)}
          placeholder="Vývoj webových aplikací, správa databází..."
          rows={3}
        />
      </div>

      <div className="form-field">
        <label>Datum od</label>
        <input
          type="text"
          value={dateFrom}
          onChange={(e) => onDateFromChange(e.target.value)}
          placeholder="2022"
        />
      </div>

      <div className="form-field">
        <label>Datum do</label>
        <input
          type="text"
          value={dateTo}
          onChange={(e) => onDateToChange(e.target.value)}
          placeholder="současnost"
        />
      </div>
    </div>
  );
}

export default ExperienceForm;
