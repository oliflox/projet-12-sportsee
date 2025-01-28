const handleError = (error) => {
  const errorDiv = document.getElementById('errorDiv');
  if (errorDiv) {
    errorDiv.innerHTML = `Une erreur est survenue: ${error.message}`;
    errorDiv.classList.remove('hide');
  }
};

const handleNoData = () => {
  const errorDiv = document.getElementById('errorDiv');
  if (errorDiv) {
    errorDiv.innerHTML = "Aucun utilisateur trouvé";
    errorDiv.classList.remove('hide');
  }
};

const clearError = () => {
  const errorDiv = document.getElementById('errorDiv');
  if (errorDiv) {
    errorDiv.innerHTML = "";
    errorDiv.classList.add('hide');
  }
};

export { handleError, handleNoData, clearError };