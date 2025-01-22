const errorDiv = document.getElementById("errorDiv");

const handleError = (error) => {
  if (errorDiv) {
    errorDiv.classList.remove("hide");
    errorDiv.innerText = `Une erreur est survenue: ${error.message}`;
  }
};

const handleNoData = () => {
  if (errorDiv) {
    errorDiv.classList.remove("hide");
    errorDiv.innerText = "Aucun utilisateur trouvé";
  }
};

export { handleError, handleNoData };