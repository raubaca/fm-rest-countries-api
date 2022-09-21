import { useContext } from 'react';

import Controls from '../components/Controls';
import CountryList from '../components/CountryList';
import { useCountries } from '../hooks/useCountries';
import { AppContext } from '../App';

const Countries = () => {
  const { data } = useContext(AppContext);

  const { countries, setSearch, setFilter } = useCountries(data);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

  return (
    <>
      <Controls onSearch={handleSearch} onFilter={handleFilter} />
      <CountryList countries={countries} />
    </>
  );
};

export default Countries;
