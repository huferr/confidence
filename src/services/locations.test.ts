import { getLocations } from "./locations.service";
import axios from "axios";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const resultParsed = [{
  "id": 95144,
  "locationId": "HOM49XD6",
  "locationName": "Non Seq - Amit's workspace",
  "locationDetails": "",
  "locationType": "Personal",
  "numberofDevices": 0,
  "address": {
      "addressLine1": "Geng Road",
      "addressLine2": "",
      "city": "Palo Alto",
      "state": "CA",
      "zip": "94303"
  },
  "locationUserRole": "Owner",
  "active": false,
  "newLocation": false,
  "subscriptionActive": false,
  "longitude": -122.119496,
  "latitude": 37.451601
},
{
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
},
{
  "id": 77752,
  "locationId": "HOMEDJ8B",
  "locationName": "Report Testing",
  "locationDetails": "Report Testing",
  "locationType": "Personal",
  "numberofDevices": 0,
  "address": {
      "addressLine1": "6463 Calle Esperanza",
      "city": "Pleasanton",
      "state": "CA",
      "zip": "94566"
  },
  "locationUserRole": "Owner",
  "active": true,
  "newLocation": false,
  "subscriptionActive": false,
  "longitude": -121.903796,
  "latitude": 37.671177
}]

  

it('Should return a location object', async () => {
  mockedAxios.post.mockImplementation(() => Promise.resolve(resultParsed));

  const res = await getLocations(0);
  expect(axios.post).toHaveBeenCalledWith('/confidence/locations', {
    "limit": 3, 
    "start": 0
  }, 
  {
    "headers": {
      "cache-control": "no-cache",
      "content-type": "application/json",
      "username": "amitphatak$r5labs.com"
    }
  });
  expect(res).toEqual(resultParsed);
});

it('Should throw an error', async () => {
  mockedAxios.post.mockImplementation(() => Promise.reject(new Error('Network Error')));

  const res = await getLocations(1);
  expect(res).toStrictEqual(Error('Network Error'));
});


