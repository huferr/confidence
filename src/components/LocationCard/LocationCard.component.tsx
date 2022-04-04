import { Location } from "../../typings/response";
import { LocationAddressIcon, LocationTypeIcon, LocationDetailsIcon } from '../../assets/icons/'
import './LocationCard.styles.css'

interface LocationCardProps {
	location?: Location
}

export const LocationCard = ({ location }: LocationCardProps) => {
	const { address, locationName, locationType, locationDetails } = location!;
	return (
		<div className="container">
			<div className="name-wrapper">
				<h1 aria-label="location-name">{locationName}</h1>
			</div>

			<div className="bottom-content">
				<div className="type-wrapper" aria-label="location-type-div">
					<LocationTypeIcon />
					<p aria-label="location-type">{locationType}</p>
				</div>

				{locationDetails ? (
					<div className="details-wrapper" aria-label="location-details-div">
						<LocationDetailsIcon />
						<p aria-label="location-details">{locationDetails}</p>
					</div>
				) : null
				}

				<div className="address-wrapper" aria-label="location-address-div">
					<LocationAddressIcon />
					<p aria-label="location-address">{address.addressLine1}, {address.city}, {address.state} {address.zip}</p>
				</div>
			</div>
		</div>
	);
}