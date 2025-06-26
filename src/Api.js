
import axios from "axios";

const BACKEND = import.meta.env.VITE_APP_BACKEND_URL;

export const fetchBoards = () => {
  return axios.get(`${BACKEND}/boards`);
};

export const createBoard = (data) => {
  return axios.post(`${BACKEND}/boards`, data);
};

export const fetchCards = (boardId) => {
  return axios.get(`${BACKEND}/boards/${boardId}/cards`);
};

export const addCard = (boardId, data) => {
  return axios.post(`${BACKEND}/boards/${boardId}/cards`, data);
};

export const likeCard = (boardId, cardId) => {
  return axios.put(`${BACKEND}/boards/${boardId}/cards/${cardId}/like`);
};

export const deleteCard = (boardId, cardId) => {
  return axios.delete(`${BACKEND}/boards/${boardId}/cards/${cardId}`);
};
