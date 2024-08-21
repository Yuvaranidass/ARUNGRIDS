import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-bg">
        <div className="login-container">
          <div className="login-box">
            <h1 className="has-text-centered is-size-3 has-text-weight-semibold">
              LOGIN
            </h1>
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
                <label className="label has-text-black">Password</label>
                <div className="control">
                  <input
                    className="input smart-login-input"
                    type="password"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-info is-fullwidth">Login</button>
                </div>
              </div>
            </form>
            <p className="has-text-centered mt-2">
              <a href="/forgot">Forgot your password?</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
