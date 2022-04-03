import { Location } from "../typings/location";
import { api } from "./api";

export const getLocations = async (): Promise<Location[]> => {
	try {
	  const response = await api.get('/confidence/locations')
		return response.data.locations;
	} catch (error: any) {
		return error;
	}
}

