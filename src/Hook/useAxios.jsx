import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://event-management-server-two.vercel.app',
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
