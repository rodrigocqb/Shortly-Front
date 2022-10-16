import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Form } from "../common/Form";
import { postSignUp } from "../services/shortly";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.confirmPassword !== form.password) {
      return alert("The passwords do not match");
    }
    setDisabled(true);
    postSignUp(form)
      .then((res) => navigate("/signin"))
      .catch((err) => {
        console.log(err);
        alert("There was an error when trying to sign up.");
        setDisabled(false);
      });
  }

  return (
    <main>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          type="text"
          disabled={disabled}
          onChange={(e) =>
            handleForm({ value: e.target.value, name: e.target.name })
          }
          required
        ></input>
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          disabled={disabled}
          onChange={(e) =>
            handleForm({ value: e.target.value, name: e.target.name })
          }
          required
        ></input>
        <input
          placeholder="Password"
          name="password"
          type="password"
          disabled={disabled}
          onChange={(e) =>
            handleForm({ value: e.target.value, name: e.target.name })
          }
          required
        ></input>
        <input
          placeholder="Confirm your password"
          name="confirmPassword"
          type="password"
          disabled={disabled}
          onChange={(e) =>
            handleForm({ value: e.target.value, name: e.target.name })
          }
          required
        ></input>
        <button type="submit" disabled={disabled}>
          {disabled ? (
            <>
              <ThreeDots
                height="20"
                width="81"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
              />
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </Form>
    </main>
  );
}
