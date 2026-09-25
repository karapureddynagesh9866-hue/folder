import { useState } from "react";
import "./App.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  age: "",
  gender: "",    
  city: "",
  address: "",
  password: "",
};

const requiredFields = ["name", "email", "phone", "age", "gender", "city", "password"];

export default function App() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].toString().trim()) newErrors[field] = "This field is required";
    });
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (formData.age && (isNaN(formData.age) || Number(formData.age) <= 0)) {
      newErrors.age = "Enter a valid age";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }
    setErrors({});
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setSubmittedData(null);
  };

  const field = (name, label, type = "text") => (
    <div className="field">
      <label htmlFor={name}>
        {label} {requiredFields.includes(name) && <span className="req">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        className={errors[name] ? "invalid" : ""}
        placeholder={label}
        autoComplete="off"
      />
      <div className="err-msg">{errors[name] || ""}</div>
    </div>
  );

  return (
    <div className="wrap">
      <div className="masthead">
        <p className="kicker">Task 5 — useState + Controlled Form</p>
        <h1>Trainee Registration</h1>
        <p>
          Every field below is a controlled component: its value lives in
          React state and updates on every keystroke via onChange.
        </p>
      </div>

      <div className="panel">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid">
            {field("name", "Name")}
            {field("email", "Email", "email")}
            {field("phone", "Phone Number", "tel")}
            {field("age", "Age", "number")}

            <div className="field">
              <label htmlFor="gender">
                Gender <span className="req">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={errors.gender ? "invalid" : ""}
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <div className="err-msg">{errors.gender || ""}</div>
            </div>

            {field("city", "City")}

            <div className="field full">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street, area, landmark"
              />
              <div className="err-msg"></div>
            </div>

            {field("password", "Password", "password")}
          </div>

          <div className="actions">
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button type="button" className="btn-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="result">
          <h2>Submitted data</h2>
          <dl>
            <dt>Name</dt>
            <dd>{submittedData.name}</dd>
            <dt>Email</dt>
            <dd>{submittedData.email}</dd>
            <dt>Phone Number</dt>
            <dd>{submittedData.phone}</dd>
            <dt>Age</dt>
            <dd>{submittedData.age}</dd>
            <dt>Gender</dt>
            <dd>{submittedData.gender}</dd>
            <dt>City</dt>
            <dd>{submittedData.city}</dd>
            <dt>Address</dt>
            <dd>{submittedData.address || "—"}</dd>
            <dt>Password</dt>
            <dd>{"•".repeat(submittedData.password.length)}</dd>
          </dl>
        </div>
      )}
    </div>
  );
}