import axios from 'axios';

const baseURL = 'http://20.244.56.144:80/train';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const registerCompany = (companyData) => {
  return axiosInstance.post('/register', companyData);
};

export const getAuthToken = (companyData) => {
  return axiosInstance.post('/auth', companyData);
};

export const getAllTrains = (accessToken) => {
  return axiosInstance.get('/trains', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getSingleTrain = (accessToken, trainNumber) => {
  return axiosInstance.get(`/trains/${trainNumber}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

