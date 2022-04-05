import { useEffect, useRef, useState } from 'react';
import { getLocations } from '../../services';
import { Header, LocationCard } from '../../components';
import { Location } from '../../typings';
import './Home.styles.css'

export const Home = () => {
  const [locations, setLocations] = useState<Location[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting) setCurrentPage(curr => curr + 3);
    }, options);
  
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [])
  
  useEffect(() => {
    (async () => {
      const { data } = await getLocations(currentPage)

      if (!data.locations.length) setShowLoading(false); 
      else setLocations((prev) => [...prev, [...data.locations]]);
      
    })()
  }, [currentPage]);

  return (
    <>
      <Header />
      <main>
        {locations.map((loc, index) => ( 
          <section key={index}>
            {loc.map(i => (
              <LocationCard key={i.id} location={i} /> 
            ))}
          </section>
          ))}
      </main>
      <h3 ref={loaderRef}>{showLoading ? 'Loading more locations...' : 'End!'}</h3>
    </>
  );
};
