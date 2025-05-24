// Types d'erreurs
export const ERROR_TYPES = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  API_ERROR: 'API_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

// Messages d'erreur
export const ERROR_MESSAGES = {
  [ERROR_TYPES.USER_NOT_FOUND]: 'Utilisateur non trouvé',
  [ERROR_TYPES.API_ERROR]: 'Erreur lors de la communication avec l\'API',
  [ERROR_TYPES.NETWORK_ERROR]: 'Erreur de connexion réseau',
  [ERROR_TYPES.UNKNOWN_ERROR]: 'Une erreur inattendue s\'est produite'
};

// Messages d'erreur spécifiques pour chaque type de données
export const DATA_ERROR_MESSAGES = {
  user: 'Erreur lors de la récupération des données utilisateur',
  activity: 'Erreur lors de la récupération des données d\'activité',
  averageSessions: 'Erreur lors de la récupération des données de sessions moyennes',
  performance: 'Erreur lors de la récupération des données de performance'
};

/**
 * Gère les erreurs de l'API et retourne le type d'erreur approprié
 * @param {Error} error - L'erreur à gérer
 * @returns {string} Le type d'erreur
 */
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

/**
 * Retourne le message d'erreur correspondant au type d'erreur
 * @param {string} errorType - Le type d'erreur
 * @returns {string} Le message d'erreur
 */
export const getErrorMessage = (errorType) => {
  return ERROR_MESSAGES[errorType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
};

/**
 * Retourne le message d'erreur spécifique pour un type de données
 * @param {string} dataType - Le type de données
 * @returns {string} Le message d'erreur spécifique
 */
export const getDataErrorMessage = (dataType) => {
  return DATA_ERROR_MESSAGES[dataType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
};

/**
 * Gère le cas où aucune donnée n'est disponible
 * @returns {string} Le type d'erreur USER_NOT_FOUND
 */
export const handleNoData = () => {
  return ERROR_TYPES.USER_NOT_FOUND;
}; 