import { IResponse } from "../typings/response";
import { api } from "./api";

export const getLocations = async (): Promise<IResponse> => {
	try {
	  const response = await api.get('/confidence/locations')
		return response;
	} catch (error: any) {
		return error;
	}
}

