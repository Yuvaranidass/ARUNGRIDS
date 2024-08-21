import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "bulma/css/bulma.min.css";

const UnauthorizedPage = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <section className="section">
      <div className="container">
        <animated.div style={props}>
          <div className="box has-text-centered">
            <h1 className="title">Unauthorized Access</h1>
            <p className="title is-5">
              You do not have permission to access this page.
            </p>
            <p>
              Please <Link to="/admin">return to the homepage</Link> or contact
              an administrator.
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default UnauthorizedPage;
