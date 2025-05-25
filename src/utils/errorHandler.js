/**
 * Types d'erreurs possibles dans l'application
 */
export const ERROR_TYPES = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  API_ERROR: 'API_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  NOT_FOUND: 'NOT_FOUND'
};

/**
 * Messages d'erreur associés à chaque type d'erreur
 */
export const ERROR_MESSAGES = {
  [ERROR_TYPES.USER_NOT_FOUND]: 'Utilisateur non trouvé',
  [ERROR_TYPES.API_ERROR]: 'Erreur lors de la communication avec l\'API',
  [ERROR_TYPES.NETWORK_ERROR]: 'Erreur de connexion réseau',
  [ERROR_TYPES.UNKNOWN_ERROR]: 'Une erreur inattendue s\'est produite',
  [ERROR_TYPES.NOT_FOUND]: 'La page que vous recherchez n\'existe pas'
};

/**
 * Messages d'erreur spécifiques pour chaque type de données
 */
export const DATA_ERROR_MESSAGES = {
  user: 'Erreur lors de la récupération des données utilisateur',
  activity: 'Erreur lors de la récupération des données d\'activité',
  averageSessions: 'Erreur lors de la récupération des données de sessions moyennes',
  performance: 'Erreur lors de la récupération des données de performance'
};

/**
 * Gère et catégorise les erreurs en fonction de leur type
 * @param {Error} error - L'erreur à traiter
 * @returns {string} Le type d'erreur correspondant
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
 * Récupère le message d'erreur correspondant au type d'erreur
 * @param {string} errorType - Le type d'erreur
 * @returns {string} Le message d'erreur correspondant
 */
export const getErrorMessage = (errorType) => {
  return ERROR_MESSAGES[errorType] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN_ERROR];
};

/**
 * Récupère le message d'erreur spécifique pour un type de données
 * @param {string} dataType - Le type de données
 * @returns {string} Le message d'erreur correspondant
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