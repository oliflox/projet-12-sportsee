import { useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useAverageSession = (userId) => {
  const { averageUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(averageUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [averageUrl]);

  return null;
};

export default useAverageSession;