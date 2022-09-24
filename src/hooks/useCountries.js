import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

export const useCountries = () => {
  const { data } = useContext(AppContext);

  const [countries, setCountries] = useState(data);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setCountries(
      data.filter(
        (c) =>
          (!search ||
            c.name.common.toLowerCase().includes(search.toLowerCase())) &&
          (!filter || c.region === filter)
      )
    );
  }, [search, filter]);

  const filterByRegion = (e) => setFilter(e.target.value);

  const searchByName = (e) => setSearch(e.target.value);

  return {
    countries,
    filterByRegion,
    searchByName,
  };
};
