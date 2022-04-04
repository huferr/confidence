import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { LocationCard } from '.'

const location = {
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

const address = `${location.address.addressLine1}, ${location.address.city}, ${location.address.state} ${location.address.zip}`


describe('LocationCard Component Test Suites', () => {
  it('has correct location name wrapped in heading', () => {
    render(<LocationCard location={location} />)
    expect(screen.getByLabelText('location-name')).toHaveTextContent(location.locationName)
  })
  
  it('has correct location type wrapped in paragraph', () => {
    render(<LocationCard location={location} />)
    expect(screen.getByLabelText('location-type')).toHaveTextContent(location.locationType)
  })
  
  it('has correct location details wrapped in paragraph', () => {
    render(<LocationCard location={location} />)
    expect(screen.getByLabelText('location-details')).toHaveTextContent(location.locationDetails)
  })
  
  it('has no paragraph when location details is not passed', () => {
    render(<LocationCard location={{...location, locationDetails: ''}} />)
    expect(screen.queryByLabelText('location-details')).toBeNull()
  })
  
  it('has correct location address wrapped in paragraph', () => {
    render(<LocationCard location={location} />)
    expect(screen.getByLabelText('location-address')).toHaveTextContent(address)
  })
})

