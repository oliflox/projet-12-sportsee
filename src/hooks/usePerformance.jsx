import { useEffect, useState } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const usePerformance = (userId) => {
  const [performance, setPerformance] = useState([]);
  const { performanceUrl } = getUserUrls(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(performanceUrl);
        const data = await res.json();
        if (data.data && Array.isArray(data.data.data)) {
          const kindMapping = data.data.kind;
          const mappedData = data.data.data.map(item => ({
            ...item,
            kind: kindMapping[item.kind],
          }));
          setPerformance(mappedData);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    };

    fetchData();
  }, [performanceUrl]);

  return performance;
};

export default usePerformance;
