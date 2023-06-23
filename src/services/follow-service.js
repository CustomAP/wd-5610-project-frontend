import axios from "axios";
export const getFollowStatus = async (followerId, followeeId) => {
  const response = await axios.get(
    `http://localhost:3001/api/follow/isFollowing/${followerId}/${followeeId}`
  );
  const isFollowing = response.data;
  return isFollowing;
};

export const follow = async (followerId, followeeId) => {
  const response = await axios.post("http://localhost:3001/api/follow/follow", {
    followerId: followerId,
    followeeId: followeeId,
  });
  return response.data;
};

export const unfollow = async (followerId, followeeId) => {
  const response = await axios.post(
    "http://localhost:3001/api/follow/unfollow",
    {
      followerId: followerId,
      followeeId: followeeId,
    }
  );
  return response.data;
};

export const getFollowers = async (userId) => {
  const response = await axios.get(
    `http://localhost:3001/api/follow/followers/${userId}`
  );
  return response.data;
};

export const getFollowing = async (userId) => {
  const response = await axios.get(
    `http://localhost:3001/api/follow/following/${userId}`
  );
  return response.data;
};
