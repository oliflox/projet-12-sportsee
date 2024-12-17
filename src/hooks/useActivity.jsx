import { useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useActivity = (userId) => {
  const { activityUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(activityUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [activityUrl]);

  return null;
};

export default useActivity;