
import * as api from "../../api";

export const getHomeContent = async () => {
  const response = await api.fetchHomePage();
  return response.data.modifiedResponse;
}

export const getHomeContactDetail = async () => {
  const response = await api.fetchContactDetailsPage();
  return response.data;
}