import { useNavigate, useParams } from 'react-router-dom';
import { getErrorMessage } from '../utils/errorHandler';

const ErrorPage = ({ errorType: propErrorType }) => {
  const navigate = useNavigate();
  const { errorType: urlErrorType } = useParams();
  const errorType = propErrorType || urlErrorType;

  return (
    <div className="error-container">
      <h2>Oups !</h2>
      <p>{getErrorMessage(errorType)}</p>
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
    </div>
  );
};

export default ErrorPage; 