import { useState, useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useUserInfos = (userId) => {
  const [userInfos, setUserInfos] = useState(null);
  const { mainUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => res.json())
      .then(({ data: { userInfos } }) => {
        setUserInfos(userInfos);
      })
      .catch((error) => {
        console.error("Error fetching userInfos:", error);
      });
  }, [mainUrl]);

  return userInfos;
};

export default useUserInfos;
