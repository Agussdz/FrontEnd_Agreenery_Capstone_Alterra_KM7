import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useLocation() {
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedRegency, setSelectedRegency] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Fetch Provinces
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axiosInstance.get("/regions/provinces");
        setProvinces(response.data.data); // Sesuaikan dengan struktur API Anda
      } catch (error) {
        console.error("Failed to fetch provinces", error);
      }
    };
    fetchProvinces();
  }, []);

  // Fetch Regencies when a province is selected
  useEffect(() => {
    if (selectedProvince) {
      const fetchRegencies = async () => {
        try {
          const response = await axiosInstance.get(
            `/regions/regencies/${selectedProvince}`
          );
          setRegencies(response.data.data);
          setDistricts([]); // Reset districts
          setVillages([]); // Reset villages
        } catch (error) {
          console.error("Failed to fetch regencies", error);
        }
      };
      fetchRegencies();
    }
  }, [selectedProvince]);

  // Fetch Districts when a regency is selected
  useEffect(() => {
    if (selectedRegency) {
      const fetchDistricts = async () => {
        try {
          const response = await axiosInstance.get(
            `/regions/districts/${selectedRegency}`
          );
          setDistricts(response.data.data);
          setVillages([]); // Reset villages
        } catch (error) {
          console.error("Failed to fetch districts", error);
        }
      };
      fetchDistricts();
    }
  }, [selectedRegency]);

  // Fetch Villages when a district is selected
  useEffect(() => {
    if (selectedDistrict) {
      const fetchVillages = async () => {
        try {
          const response = await axiosInstance.get(
            `/regions/villages/${selectedDistrict}`
          );
          setVillages(response.data.data);
        } catch (error) {
          console.error("Failed to fetch villages", error);
        }
      };
      fetchVillages();
    }
  }, [selectedDistrict]);

  return {
    provinces,
    regencies,
    districts,
    villages,
    selectedProvince,
    setSelectedProvince,
    selectedRegency,
    setSelectedRegency,
    selectedDistrict,
    setSelectedDistrict,
  };
}