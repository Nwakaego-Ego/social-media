import "./loader.css";

const loader = () => {
  return (
    <div className="loading-container">
      <img src="./images/loading.gif" className="loader-image" />
      <span className="loading">Loading...</span>
    </div>
  );
};

export default loader;
