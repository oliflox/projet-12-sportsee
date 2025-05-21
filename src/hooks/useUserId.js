import { useState } from 'react';

const useUserId = () => {
  const [userId] = useState(12);
  return userId;
};

export default useUserId;
