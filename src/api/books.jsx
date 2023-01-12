import axios from 'axios';

const BASE_URL = ""

export const fetchGetBooksList = async () => {
	const resp = await axios.get(`${BASE_URL}/books`);
	return resp.data;
};
