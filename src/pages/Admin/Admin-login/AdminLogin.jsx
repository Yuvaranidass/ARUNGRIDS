import { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navi = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {

      setErrorMessage('');
      navi('/admin/dashboard')
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Email is required');
    } else {
      // Simulate OTP sending logic
      setErrorMessage('');
      setIsOtpSent(true);
    }
  };

  const handleBackToLoginClick = () => {
    setIsForgotPassword(false);
    setIsOtpSent(false);
    setOtp('');
  };

  return (
    <div className="containers">
    <div className="login-page">
      <div className="login-container">
        {!isForgotPassword ? (
          <>
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className="input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
                <div className="input-underline"></div>
              </div>
              <div className="input-container">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
                <div className="input-underline"></div>
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <button type="submit" className="login-button">
                Login
              </button>
              <div className="forgot-password" onClick={() => setIsForgotPassword(true)}>
                Forgot Password?
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="login-title">{!isOtpSent ? 'Reset Password' : 'Enter OTP'}</h2>
            <form
              className="forgot-password-form"
              onSubmit={!isOtpSent ? handleForgotPasswordSubmit : (e) => e.preventDefault()}
            >
              {!isOtpSent ? (
                <div className="input-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label>Email</label>
                  <div className="input-underline"></div>
                </div>
              ) : (
                <div className="input-container">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxLength="4"
                  />
                  <label>Enter OTP</label>
                  <div className="input-underline"></div>
                </div>
              )}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <button type="submit" className="login-button">
                {!isOtpSent ? 'Reset Password' : 'Verify OTP'}
              </button>
              <div className="forgot-password" onClick={handleBackToLoginClick}>
                Back to Login
              </div>
            </form>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
