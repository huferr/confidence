import { Location } from "../../typings/location";
import { LocationAddressIcon } from '../../assets/icons/LocationAddressIcon'
import { LocationTypeIcon } from "../../assets/icons/LocationTypeIcon";
import { LocationDetailsIcon } from "../../assets/icons/LocationDetailsIcon";
import './LocationCard.styles.css'

interface LocationCardProps {
	location?: Location
}

export const LocationCard = ({ location }: LocationCardProps) => {
	const { address, locationName, locationType, locationDetails } = location!;
	return (
		<div className="container">
			<div className="name-wrapper">
				<h1>{locationName}</h1>
			</div>

			<div className="bottom-content">
				<div className="type-wrapper">
					<LocationTypeIcon />
					<p>{locationType}</p>
				</div>

				{locationDetails ? (
					<div className="details-wrapper">
						<LocationDetailsIcon />
						<p>{locationDetails}</p>
					</div>
					) : null
				}
					
				<div className="address-wrapper">
					<LocationAddressIcon />
					<p>{address.addressLine1}, {address.city}, {address.state} {address.zip}</p>
				</div>
			</div>
		</div>
	);
}