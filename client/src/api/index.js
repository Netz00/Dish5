import axios from 'axios';

const API = axios.create({ baseURL: 'https://dish5.chickenkiller.com:3123/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

export const fetchMeal = (id) => API.get(`/meals/${id}`);
export const fetchMeals = (page) => API.get(`/meals?page=${page}`);
export const fetchAllMeals = () => API.get(`/meals`);
export const fetchMealsBySearch = (searchQuery) => API.get(`/meals/search?searchQuery=${searchQuery.search}`);
export const deleteMeal = (id) => API.delete(`/meals/${id}`);
export const createMeal = (newMeal) => API.post('/meals', newMeal);

export const fetchMenus = () => API.get(`/menus`);
export const fetchMenuMeals = (id) => API.get(`/menus/${id}`);
export const deleteMenu = (id) => API.delete(`/menus/${id}`);
export const createMenu = (newMenu) => API.post('/menus', newMenu);
