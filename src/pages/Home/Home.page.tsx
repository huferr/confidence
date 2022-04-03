import { useEffect, useState } from 'react';
import { getLocations } from '../../services';
import { LocationCard } from '../../components/LocationCard/LocationCard.component';
import { Location } from '../../typings/location';
import { splitArrayBy } from '../../helpers';
import Logo from '../../assets/logo.svg';
import './Home.styles.css'

export const Home = () => {

  const [locations, setLocations] = useState<Location[][]>([]);

  useEffect(() => {
    (async () => {
      const data = await getLocations()
      setLocations(splitArrayBy(3, data))
    })()
  }, [])

  return (
    <>
    <header>
      <img src={Logo} alt="Logo" className="logo"/>
      <h2>Confidence System Challenge</h2>
    </header>
    {locations.map((group, index) => (
      <section key={index} className={index === 0 ? 'first-section' : ''}>
        {group.map((location) => <LocationCard key={location.id} location={location}/>)}
      </section>
    ))}
    </>
  );
};
