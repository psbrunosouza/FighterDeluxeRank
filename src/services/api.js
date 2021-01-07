import axios from 'axios';

// /59990ab5-8a7f-4c6c-a823-b404e632fd5d

const api = axios.create({
  baseURL: "https://sheet.best/api/sheets",
});

export default api;