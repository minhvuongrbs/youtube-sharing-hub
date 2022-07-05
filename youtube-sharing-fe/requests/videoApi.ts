import axios from 'axios';

export const getAllVideos = async () => {
  try {
    const res = await axios.get(`/api/videos`);
    return res.data;
  } catch (error) {
    console.log('getAllVideos err', error);
  }
};
