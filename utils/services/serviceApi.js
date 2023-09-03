
import * as api from "../../api";

 const getServiceContentById = async (pageId) => {

  const response =   await api.fetchServicePageDetail(pageId);
  return response.data;
}

export default getServiceContentById;