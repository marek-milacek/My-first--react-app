// Tato komponenta dostane od App:
function GeneralInfoForm({
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onPhoneChange,
}) {
  return (
    <div className="form-section">
      <h2>Základní informace</h2>

      <div className="form-field">
        <label>Jméno</label>
        {/* onChange= zavolá funkci z App pokaždé, když uživatel píše */}
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Jan Novák"
        />
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="jan.novak@email.cz"
        />
      </div>

      <div className="form-field">
        <label>Telefon</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+420 123 456 789"
        />
      </div>
    </div>
  );
}

export default GeneralInfoForm;
