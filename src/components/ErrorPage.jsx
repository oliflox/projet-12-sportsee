import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ErrorPage = ({ errorType: propErrorType }) => {
  const navigate = useNavigate();
  const { errorType: urlErrorType } = useParams();
  const errorType = propErrorType || urlErrorType;

  const getErrorMessage = () => {
    switch (errorType) {
      case 'API_ERROR':
        return "Une erreur s'est produite lors de la récupération des données. Veuillez réessayer plus tard.";
      case 'USER_NOT_FOUND':
        return "L'utilisateur demandé n'existe pas.";
      case 'NOT_FOUND':
        return "La page que vous recherchez n'existe pas.";
      default:
        return "Une erreur inattendue s'est produite.";
    }
  };

  return (
    <div className="error-container">
      <h2>Oups !</h2>
      <p>{getErrorMessage()}</p>
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
    </div>
  );
};

export default ErrorPage; 