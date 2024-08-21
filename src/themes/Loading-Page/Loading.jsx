import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container has-text-centered">
      <div className="spinner"></div>
      <p className="is-size-4 has-text-grey">Loading...</p>
    </div>
  );
};

export default Loading;
