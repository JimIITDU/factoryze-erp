import { useEffect, useState } from "react";
import { distributorService } from "@/services/distributor.service";
import { Distributor } from "@/types/distributor.types";

export function useDistributors() {
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchDistributors = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await distributorService.getAll();
      console.log("GET RESPONSE:", data);
      setDistributors(data);
    } catch (err) {
      setError("Failed to load distributors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDistributors();
  }, []);

  return {
    distributors,
    loading,
    refetch: fetchDistributors,
  };
}
