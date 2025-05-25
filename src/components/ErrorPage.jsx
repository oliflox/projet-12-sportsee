import { useNavigate, useParams } from 'react-router-dom';
import { ERROR_MESSAGES, ERROR_TYPES } from '../utils/errorHandler';

const ErrorPage = ({ errorType: propErrorType }) => {
  const navigate = useNavigate();
  const { errorType: urlErrorType } = useParams();
  const errorType = propErrorType || urlErrorType;

  const getErrorMessage = () => {
    return ERROR_MESSAGES[errorType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
  };

  return (
    <div className="error-container">
      <h2>Oups !</h2>
      <p>{getErrorMessage()}</p>
      <button onClick={() => navigate('/')}>Retour à l&apos;accueil</button>
    </div>
  );
};

export default ErrorPage; 