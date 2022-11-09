export const API_URL = "https://636a8b8eb10125b78fdebc78.mockapi.io";

export const API_URL_COLLECTIONS = `${API_URL}/collections`;

export const API_URL_COLLECTIONS_BY_CATEGORY_ID = (id: number) =>
  `${API_URL_COLLECTIONS}?category=${id}`;

export const GET_PAGE_BY_NUMBER = (
  page: number,
  isFirstParam: boolean,
  limit: number = 3
) => `${isFirstParam ? "?" : "&"}page=${page}&limit=${limit}`;
