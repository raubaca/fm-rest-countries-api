import Controls from '../components/Controls';
import CountryList from '../components/CountryList';
import { useCountries } from '../hooks/useCountries';

const Countries = () => {
  const { countries, filterByRegion, searchByName } = useCountries();

  return (
    <>
      <Controls onSearch={searchByName} onFilter={filterByRegion} />
      <CountryList countries={countries} />
    </>
  );
};

export default Countries;
