import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleformSubmit(event) {
    event.preventDefault();
  }

  function handleChanges(indentifer, value) {
    setEnteredValues((prevValues) => ({ ...prevValues, [indentifer]: value }));
    setDidEdit((prevValues) => ({ ...prevValues, [indentifer]: false }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({ ...prevValues, [identifier]: true }));
  }

  return (
    <form onSubmit={handleformSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleChanges("email", event.target.value)}
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
