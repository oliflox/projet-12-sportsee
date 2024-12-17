import { useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useMainData = (userId) => {
  const { mainUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [mainUrl]);

  return null;
};

export default useMainData;