import { useEffect, useState } from 'react';
import { getLocations } from '../../services';
import { LocationCard, Header } from '../../components';
import { Location } from '../../typings/response';
import { splitArrayBy } from '../../helpers';
import './Home.styles.css'

export const Home = () => {

  const [locations, setLocations] = useState<Location[][]>([]);

  useEffect(() => {
    (async () => {
      const { data: { locations } } = await getLocations()
      setLocations(splitArrayBy(3, locations))
    })()
  }, [])

  return (
    <>
      <Header />
      {locations.map((group, index) => (
        <section key={index} className={index === 0 ? 'first-section' : ''}>
          {group.map((location) => <LocationCard key={location.id} location={location} />)}
        </section>
      ))}
    </>
  );
};
