export const handleError = (error) => {
  if (error.message === 'USER_NOT_FOUND') {
    return 'USER_NOT_FOUND';
  }
  return 'API_ERROR';
};

export const handleNoData = () => {
  return 'USER_NOT_FOUND';
}; 