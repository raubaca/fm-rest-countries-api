import { API_URL } from '../utils/constants';

export const getCountries = async () => {
  const countries = await fetch(
    `${API_URL}all?fields=name,capital,region,population,cca3,flags`
  );
  return countries;
};

export const getCountryById = async (countryId) => {
  const country = await fetch(`${API_URL}alpha/${countryId}`);
  return country;
};
