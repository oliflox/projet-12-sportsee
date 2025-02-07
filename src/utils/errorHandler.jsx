import { useSyncExternalStore } from "react";

let errorMessage = "";

const handleError = (error) => {
  errorMessage = `Une erreur est survenue: ${error.message}`;
  notifySubscribers();
};

const handleNoData = () => {
  errorMessage = "Aucun utilisateur trouvé";
  notifySubscribers();
};

const clearError = () => {
  errorMessage = "";
  notifySubscribers();
};

const subscribers = new Set();

const subscribe = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

const getSnapshot = () => errorMessage;

const useErrorStore = () => useSyncExternalStore(subscribe, getSnapshot);

export { handleError, handleNoData, clearError, useErrorStore };