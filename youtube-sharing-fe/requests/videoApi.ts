import axios from 'axios';
import Router from 'next/router';

export const getAllVideos = async () => {
  try {
    const res = await axios.get(`/api/videos`);
    return res.data;
  } catch (error) {
    console.log('getAllVideos err', error);
  }
};

export const shareNewVideo = async (youtubeUrl: any) => {
  try {
    const res = await axios.post(`/api/videos`, { youtubeUrl });
    Router.replace('/');
  } catch (error) {
    console.log('shareNewVideo err', error);
  }
};
