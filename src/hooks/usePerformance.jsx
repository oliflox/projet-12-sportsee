import { useState, useEffect } from "react";
import { fetchPerformanceData } from "../api/api";

const usePerformance = (userId) => {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPerformanceData(userId);
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
  }, [userId]);

  return performance;
};

export default usePerformance;
