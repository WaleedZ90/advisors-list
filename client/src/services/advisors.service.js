import axios from "axios";

export const getAdvisors = async () => {
	return await axios
		.get(`/api/v1/users`)
		.then(response => {
			return response.data;
		})
		.catch(e => e);
};
