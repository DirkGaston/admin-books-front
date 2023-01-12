import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchGetBooksList = async () => {
	const resp = await axios.get(`${BASE_URL}/books`);
	return resp.data;
};
