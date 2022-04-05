import axios from "axios";
import { IResponse } from "../typings/response";

export const getLocations = async (page: number): Promise<IResponse> => {
	try {
	  const response = await axios.post('/confidence/locations', {
		  "start": page,
		  "limit": 3
		}, {
			headers: {
				'cache-control': 'no-cache',
        'content-type': 'application/json',
        'username': 'amitphatak$r5labs.com'
			}
		})
		return response;
	} catch (error: any) {
		return error;
	}
}