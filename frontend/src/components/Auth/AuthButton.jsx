import PropTypes from "prop-types";
import "../../App.css"; 

const AuthButton = ({ text, loading = false, onClick }) => {
  return (
    <button 
      className="auth-btn" 
      type="submit" 
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Processing..." : text}
    </button>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AuthButton;