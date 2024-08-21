import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
    error_list: {},
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullname: signupInput.fullname,
      email: signupInput.email,
      password: signupInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then(() => {
      axios.post(`/api/signup`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_fullname", res.data.username);
          swal("Success", res.data.message, "success").then(() => {
            navigate("/login");
          });
        } else {
          setSignupInput({
            ...signupInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login-box">
          <h1 className="has-text-centered is-size-3 has-text-weight-semibold">
            SIGNUP
          </h1>
          <form onSubmit={signupSubmit}>
            <div className="field">
              <label className="label has-text-black">Fullname</label>
              <div className="control">
                <input
                  className="input smart-login-input"
                  type="text"
                  name="fullname"
                  onChange={handleInput}
                  value={signupInput.fullname}
                  autoFocus
                />
              </div>
              <span>{signupInput.error_list.fullname}</span>
            </div>
            <div className="field">
              <label className="label has-text-black">Email</label>
              <div className="control">
                <input
                  className="input smart-login-input"
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={signupInput.email}
                />
              </div>
              <span>{signupInput.error_list.email}</span>
            </div>
            <div className="field">
              <label className="label has-text-black">Password</label>
              <div className="control">
                <input
                  className="input smart-login-input"
                  type="password"
                  name="password"
                  onChange={handleInput}
                  value={signupInput.password}
                />
              </div>
              <span>{signupInput.error_list.password}</span>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-info is-fullwidth">Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
