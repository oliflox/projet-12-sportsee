import { useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const usePerformance = (userId) => {
  const { performanceUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(performanceUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [performanceUrl]);

  return null;
};

export default usePerformance;
