import axios from "axios";
import { IResponse } from "../typings/response";

export const getLocations = async (): Promise<IResponse> => {
	try {
	  const response = await axios.get('https://6246bd8e739ac8459191f7d5.mockapi.io/v2/confidence/locations')
		return response;
	} catch (error: any) {
		return error;
	}
}

