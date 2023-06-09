import axios from "axios";
export const getUser = async (userId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/user/${userId}`
  );
  const user = response.data;
  return user;
};

export const updateUser = async (payload) => {
  const { token, profile } = payload;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/user`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json", token: token },
      body: JSON.stringify(profile),
    }
  );
  const responseUser = response.data;
  return responseUser;
};

export const getAllReviewsForUser = async (userId, pageNo=null, limit=null) => {
  if(pageNo && limit){
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/review/getAllReviewsForUser/${userId}/${pageNo}/${limit}`
    );
    return response.data;
  }
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/review/getAllReviewsForUser/${userId}`
  );
  return response.data;
};
