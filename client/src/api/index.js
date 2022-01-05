import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchMeal = (id) => API.get(`/meals/${id}`);
export const fetchMeals = (page) => API.get(`/meals?page=${page}`);
export const fetchAllMeals = () => API.get(`/meals`);
export const fetchMealsBySearch = (searchQuery) =>
  API.get(`/meals/search?searchQuery=${searchQuery.search}`);

export const fetchMenus = () => API.get(`/menus`);
export const fetchMenuMeals = (id) => API.get(`/menus/${id}`);
