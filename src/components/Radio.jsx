import "./Radio.css";

function Radio({ label, name, options, value, onChange }) {
  return (
    <fieldset className="radio">
      <legend className="radio__label">{label}</legend>
      <div className="radio__group">
        {options.map((option) => (
          <label key={option.value} className="radio__option">
            <input
              className="radio__input"
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <span className="radio__custom" />
            <span className="radio__text">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default Radio;
