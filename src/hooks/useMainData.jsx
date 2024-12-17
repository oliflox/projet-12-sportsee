import { useState, useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useMainData = (userId) => {
  const [keyData, setKeyData] = useState(null);
  const { mainUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => res.json())
      .then((data) => {
        setKeyData(data.data.keyData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [mainUrl]);

  return keyData;
};

export default useMainData;