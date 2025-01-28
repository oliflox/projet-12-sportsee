import { useState, useEffect } from "react";
import { fetchUserData } from "../api/getUser";

const useUser = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const result = await fetchUserData(userId);
        if (!result.data) {
          setUserData({ error: new Error("Aucun utilisateur trouvé") });
        } else {
          setUserData(result.data);
        }
      } catch (error) {
        setUserData({ error });
      }
    };

    fetchData();
  }, [userId]);

  return userData;
};

export { useUser };
