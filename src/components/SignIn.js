import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Form } from "../common/Form";
import UserContext from "../contexts/UserContext";
import { useLocal } from "../hooks/useLocal";
import { postSignIn } from "../services/shortly";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(false);

  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();

  useLocal();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    postSignIn(form)
      .then((res) => {
        setToken(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error when trying to log you in.");
        setDisabled(false);
      });
  }

  return (
    <main>
      <Form disabled={disabled} onSubmit={handleSubmit}>
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
        <button type="submit" disabled={disabled}>
          {disabled ? (
            <>
              <ThreeDots
                height="13"
                width="51"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
              />
            </>
          ) : (
            "Log in"
          )}
        </button>
      </Form>
    </main>
  );
}
