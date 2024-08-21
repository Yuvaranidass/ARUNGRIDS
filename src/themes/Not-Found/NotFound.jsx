import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <section className="hero is-flex is-align-items-center">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">404</h1>
              <p className="subtitle is-2">Page Not Found</p>
              <p className="content">
                Sorry, the page you are looking for does not exist.
              </p>
              <a className="button is-rounded is-dark" onClick={() => navigate("/")}>
                <span className="icon is-small">
                  <i
                    className="fa fa-chevron-circle-left"
                    aria-hidden="true"
                  ></i>
                </span>
                <span>Go To Home</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
