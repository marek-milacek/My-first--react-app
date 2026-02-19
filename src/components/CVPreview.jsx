function CVPreview({
  name,
  email,
  phone,
  school,
  fieldOfStudy,
  eduDateFrom,
  eduDateTo,
  company,
  position,
  duties,
  expDateFrom,
  expDateTo,
}) {
  return (
    <div className="cv-preview">
      {/* Základní informace */}
      <div className="cv-header">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>

      {/* Vzdělání */}
      <div className="cv-section">
        <h2>Vzdělání</h2>
        <p className="cv-title">{school}</p>
        <p>{fieldOfStudy}</p>
        <p className="cv-date">
          {eduDateFrom} – {eduDateTo}
        </p>
      </div>

      {/* Pracovní zkušenosti */}
      <div className="cv-section">
        <h2>Pracovní zkušenosti</h2>
        <p className="cv-title">{position}</p>
        <p>{company}</p>
        <p>{duties}</p>
        <p className="cv-date">
          {expDateFrom} – {expDateTo}
        </p>
      </div>
    </div>
  );
}

export default CVPreview;
