import { useEffect, useState } from "react";
import { supplierService } from "@/services/supplier.service";
import { Supplier } from "@/types/supplier.types";

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await supplierService.getAll();
      console.log("GET RESPONSE:", res);
      setSuppliers(res);
    } catch (err) {
      setError("Failed to load suppliers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return {
    suppliers,
    loading,
    error,
    refetch: fetchSuppliers,
  };
}
