export const ERROR_TYPES = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  API_ERROR: 'API_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  NOT_FOUND: 'NOT_FOUND'
};

export const ERROR_MESSAGES = {
  [ERROR_TYPES.USER_NOT_FOUND]: 'Utilisateur non trouvé',
  [ERROR_TYPES.API_ERROR]: 'Erreur lors de la communication avec l\'API',
  [ERROR_TYPES.NETWORK_ERROR]: 'Erreur de connexion réseau',
  [ERROR_TYPES.UNKNOWN_ERROR]: 'Une erreur inattendue s\'est produite',
  [ERROR_TYPES.NOT_FOUND]: 'La page que vous recherchez n\'existe pas',

  user: 'Erreur lors de la récupération des données utilisateur',
  activity: 'Erreur lors de la récupération des données d\'activité',
  averageSessions: 'Erreur lors de la récupération des données de sessions moyennes',
  performance: 'Erreur lors de la récupération des données de performance'
};

export const handleError = (error) => {
  if (error.message === ERROR_TYPES.USER_NOT_FOUND) {
    return ERROR_TYPES.USER_NOT_FOUND;
  }
  
  if (error.message.includes('API_ERROR')) {
    return ERROR_TYPES.API_ERROR;
  }
  
  if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
    return ERROR_TYPES.NETWORK_ERROR;
  }
  
  return ERROR_TYPES.UNKNOWN_ERROR;
};

export const getErrorMessage = (errorType) => {
  return ERROR_MESSAGES[errorType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
};

export const getDataErrorMessage = (dataType) => {
  return ERROR_MESSAGES[dataType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
};

export const handleNoData = () => {
  return ERROR_TYPES.USER_NOT_FOUND;
}; 