import './spinner.css';

const Spinner = () => (
  <div className="spinner-overlay">
    <div className="spinner-container">
      <div className="spinner-dots">
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
      </div>
      <p className="spinner-text">Loading...</p>
    </div>
  </div>
);

export default Spinner;
