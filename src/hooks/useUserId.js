import { useParams } from 'react-router-dom';

const useUserId = () => {
  const { userId } = useParams();
  return parseInt(userId, 10);
};

export default useUserId;
