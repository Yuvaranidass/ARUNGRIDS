import "./Login.css";

const Forgot = () => {
  return (
    <>
      <div className="login-bg">
        <div className="forgot-password-container">
          <div className="forgot-password-box has-background-white">
            <h1 className="has-text-centered is-size-3 has-text-weight-semibold">
              Forgot Your Password?
            </h1>
            <p className="is-size-5 has-text-centered">
              Enter your email address to reset your password.
            </p>
            <form>
              <div className="field">
                <label className="label has-text-black">Email</label>
                <div className="control">
                  <input
                    className="input smart-login-input"
                    type="email"
                    required
                    autoFocus
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-info is-fullwidth">
                    Send Reset Link
                  </button>
                </div>
              </div>
            </form>
            <p className="has-text-centered mt-2">
              <a href="/login">Back to Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
