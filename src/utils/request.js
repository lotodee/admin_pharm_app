import axios from "axios";


export const fetchPharmaciesData = async (userToken ,id) => {
    let response;
    try {
      const axiosResponse = await axios.get(`https://staging.medfinder.com.ng/api/v1/admin/store-summary/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}` // Include the token in the Authorization header
        }
      });
   response = axiosResponse.data.data
   console.log(response)
    } catch (error) {
   response = error
    }
    return response
  };


  export const fetchPharmaciesInventoryData = async (userToken,id) => {
    let response;
    try {
      const axiosResponse = await axios.get(`https://staging.medfinder.com.ng/api/v1/pharmacies/inventory?page=1&limit=10&name&brand&category&pharmacyId=${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}` // Include the token in the Authorization header
        }
      });
      response = axiosResponse.data.data
  
    } catch (error) {
   response = error
    }
    return response
  };