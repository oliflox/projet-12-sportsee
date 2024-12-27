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

export default useKeyData;
