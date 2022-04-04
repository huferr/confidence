import { getLocations } from "./locations.service";
import axios from "axios";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const resultParsed = {
  "id": 82809,
  "locationId": "BUS134NE",
  "locationName": "Validate Workspace White Screen",
  "locationDetails": "Validate Workspace White Screen",
  "locationType": "Business",
  "numberofDevices": 0,
  "address": {
    "addressLine1": "11 Van Ness Avenue",
    "addressLine2": "",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94102"
  },
  "locationUserRole": "Owner",
  "active": true,
  "newLocation": false,
  "subscriptionActive": false,
  "longitude": -122.418823,
  "latitude": 37.774538
}

it('Should return a location object', async () => {
  mockedAxios.get.mockImplementation(() => Promise.resolve(resultParsed));

  const res = await getLocations();
  expect(axios.get).toHaveBeenCalledWith('https://6246bd8e739ac8459191f7d5.mockapi.io/v2/confidence/locations');
  expect(res).toEqual(resultParsed);
});

it('Should throw an error', async () => {
  mockedAxios.get.mockImplementation(() => Promise.reject(new Error('Network Error')));

  const res = await getLocations();
  expect(res).toStrictEqual(Error('Network Error'));
});


