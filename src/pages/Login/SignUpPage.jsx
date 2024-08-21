import { useState, useEffect } from "react";
import "./SignUpStyle.css";
import {
  MdEmail,
  MdLock,
  MdPhone,
  MdPerson2,
  MdArrowBack,
} from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { SIGNUP } from "../../services/ImageServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    setIsOtpSent(false);
    setErrors({});
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setContactNo("");
    setOtp("");
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
    setErrors({});
    setContactNo("");
    setOtp("");
  };

  const handleSendOtp = () => {
    if (validateContactNo()) {
      setIsOtpSent(true);
    }
  };

  const validateContactNo = () => {
    const newErrors = {};
    if (!contactNo) {
      newErrors.contactNo = "Contact number is required";
    } else if (!/^\d{10}$/.test(contactNo)) {
      newErrors.contactNo = "Contact number is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const newErrors = {};

    if (isForgotPassword) {
      if (!contactNo) {
        newErrors.contactNo = "Contact number is required";
      } else if (!/^\d{10}$/.test(contactNo)) {
        newErrors.contactNo = "Contact number is invalid";
      }
      if (isOtpSent && !otp) {
        newErrors.otp = "OTP is required";
      }
    } else {
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email is invalid";
      }

      if (!password) {
        newErrors.password = "Password is required";
      }

      if (!name) {
        newErrors.name = "Name is required";
      }

      if (!isLogin && !confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (!isLogin && password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted");
    }
  };

  return (
    <div className="background-image">
      <div className="columns">
        <div className="column">
          <p
            className="mx-2 is-clickable has-text-white is-size-6"
            onClick={() => navigate("/")}
          >
            <i className="fa fa-sign-out" aria-hidden="true"></i> Exit
          </p>
          <div className="alignitems">
            <p className="LoginText">Welcome</p>
            <p className="LoginTexts">SRI JAYAM PRINTERS</p>
            <img src={SIGNUP} className="imagestyle" />
          </div>
        </div>
        <div className="column">
          <div className="align">
            <div className="SignUp" data-aos="fade-left">
              <form onSubmit={handleSubmit}>
                {isForgotPassword ? (
                  isOtpSent ? (
                    <div>
                      <MdArrowBack
                        size={24}
                        className="back-arrow"
                        onClick={() => setIsForgotPassword(false)}
                      />
                      <p className="SignUpText">Enter OTP</p>
                      <div className="alignitems">
                        <p className="ContactTexts">
                          Enter your Verification code we
                        </p>
                        <p className="ContactTexts">
                          just sent you on your Mobile
                        </p>
                        <p className="ContactTexts">Number</p>
                      </div>
                      <div className="input-field"></div>
                      {errors.otp && <p className="error-text">{errors.otp}</p>}
                      <div className="buttonAlign">
                        <button type="submit" className="signup-button">
                          Submit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <MdArrowBack
                        size={24}
                        className="back-arrow"
                        onClick={() => setIsForgotPassword(false)}
                      />
                      <p className="SignUpText">Forgot Password</p>
                      <div className="input-field">
                        <MdPhone size={24} />
                        <input
                          type="text"
                          placeholder="Contact Number"
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                        />
                      </div>
                      {errors.contactNo && (
                        <p className="error-text">{errors.contactNo}</p>
                      )}
                      <div className="aligns">
                        <p className="ContactTexts">
                          We will contact you a link to{" "}
                        </p>
                        <p className="ContactTexts">reset your password</p>
                      </div>
                      <div className="buttonAlign">
                        <button
                          type="button"
                          className="signup-button"
                          onClick={handleSendOtp}
                        >
                          Send OTP
                        </button>
                      </div>
                    </div>
                  )
                ) : isLogin ? (
                  <div>
                    <p className="SignUpText">Login</p>
                    <div className="input-field">
                      <MdEmail size={24} />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                    <div className="input-field">
                      <MdLock size={24} />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {errors.password && (
                      <p className="error-text">{errors.password}</p>
                    )}
                    <p
                      className="forgot-password"
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </p>
                    <div className="buttonAlign">
                      <button type="submit" className="signup-button">
                        Login
                      </button>
                    </div>
                    <p className="login-text">
                      Don`t have an account?{" "}
                      <b className="login" onClick={toggleForm}>
                        Sign Up
                      </b>
                    </p>
                    <div className="separator">Or</div>
                    <div className="social-login-buttons">
                      <button type="button" className="social-button-google">
                        <FaGoogle size={30} />
                        <p className="ContactTexts">Login with google</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="SignUpText">Sign Up</p>
                    <div className="input-field">
                      <MdEmail size={24} />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                    <div className="input-field">
                      <MdLock size={24} />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {errors.password && (
                      <p className="error-text">{errors.password}</p>
                    )}
                    <div className="input-field">
                      <MdLock size={24} />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="error-text">{errors.confirmPassword}</p>
                    )}
                    <div className="input-field">
                      <MdPerson2 size={24} />
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {errors.name && <p className="error-text">{errors.name}</p>}
                    <div className="buttonAlign">
                      <button type="submit" className="signup-button">
                        Sign Up
                      </button>
                    </div>
                    <p className="login-text">
                      Already have an account?{" "}
                      <b className="login" onClick={toggleForm}>
                        Login
                      </b>
                    </p>
                    <div className="separator">Or</div>
                    <div className="social-login-buttons">
                      <button type="button" className="social-button-google">
                        <FaGoogle size={30} />
                        <p className="ContactTexts">Login with google</p>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
