import { useState, useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useKeyData = (userId) => {
  const [keyData, setKeyData] = useState(null);
  const { mainUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => res.json())
      .then(({ data: { keyData } }) => {
        setKeyData(keyData);
      })
      .catch((error) => {
        console.error("Error fetching keyData:", error);
      });
  }, [mainUrl]);

  return keyData;
};

const useTodayScore = (userId) => {
  const [todayScore, setTodayScore] = useState(null);
  const { mainUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => res.json())
      .then(({ data: { todayScore } }) => {
        setTodayScore(todayScore);
      })
      .catch((error) => {
        console.error("Error fetching todayScore:", error);
      });
  }, [mainUrl]);

  return todayScore;
};

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

export { useKeyData, useTodayScore, useUserInfos };