import api from "../services/api";

export const getEnergyData = async () => {
  const response = await api.get("/energy");
  return response.data;
};