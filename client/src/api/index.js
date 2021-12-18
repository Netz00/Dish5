import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchMeal = (id) => API.get(`/meals/${id}`);
export const fetchMeals = (page) => API.get(`/meals?page=${page}`);
export const fetchAllMeals = () => API.get(`/meals`);
export const fetchMealsBySearch = (searchQuery) =>
  API.get(`/meals/search?searchQuery=${searchQuery.search}`);

export const fetchMenus = () => API.get(`/menus`);
export const fetchMenuMeals = (id) => API.get(`/menus/${id}`);
