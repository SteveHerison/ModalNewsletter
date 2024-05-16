import { useState } from "react";

const FormIn = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setEmail(target.value);
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError("Valid email required");
    } else {
      onSuccess(email);
      setEmail("");
    }
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <label htmlFor="email" className="pb-2">
            Email address
          </label>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <input
          id="email"
          placeholder="Email@email.com"
          type="email"
          value={email}
          onChange={handleChange}
          className={`border p-3 rounded-xl ${
            error && "bg-red-200 border-red-500 text-red-500"
          }`}
        />

        <button
          className="p-3 mt-5 rounded-xl bg-blue-950 text-white"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormIn;
