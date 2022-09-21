import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import { AppContext } from '../App';
import { getCountryById } from '../services/countries';
import { formatNumber } from '../utils/format';

export const loader = async ({ params }) => {
  const country = await getCountryById(params.countryId);
  if (!country.ok) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return country;
};

const getCountryNameById = (data) => (id) => {
  return data.filter((i) => i.cca3 === id)[0].name.common;
};

const Country = () => {
  const [country] = useLoaderData();
  const { data } = useContext(AppContext);

  const currencies = Object.values(country.currencies)[0].name;
  const languages = Object.values(country.languages).join(',');
  const nativeName = Object.values(country.name?.nativeName)[0].official;

  const getName = getCountryNameById(data);
  const borders = country.borders?.map((borderId) => (
    <Tag key={borderId} to={`/${borderId.toLowerCase()}`}>
      {getName(borderId)}
    </Tag>
  ));

  return (
    <Container>
      <Button to="/">&larr; Back</Button>
      <Detail>
        <Flag src={country.flags?.svg} alt={country.name?.common} />
        <Info>
          <Title>{country.name?.common}</Title>
          <List>
            <Item>
              <strong>Native Name:</strong> {nativeName}
            </Item>
            <Item>
              <strong>Population:</strong> {formatNumber(country.population)}
            </Item>
            <Item>
              <strong>Region:</strong> {country.region}
            </Item>
            <Item>
              <strong>Sub Region:</strong> {country.subregion}
            </Item>
            <Item>
              <strong>Capital:</strong>{' '}
              {country.capital?.length ? country.capital[0] : null}
            </Item>
          </List>
          <List>
            <Item>
              <strong>Top Level Domain:</strong> {country.tld[0]}
            </Item>
            <Item>
              <strong>Currencies:</strong> {currencies}
            </Item>
            <Item>
              <strong>Languages:</strong> {languages}
            </Item>
          </List>
          <Border as="p">
            <strong>Border Countries:</strong> {borders}
          </Border>
        </Info>
      </Detail>
    </Container>
  );
};

const Container = styled.section`
  padding: 1rem;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-bottom: 6rem;
  padding: 0 3rem;
  color: var(--input-color);
  font-size: 1.4rem;
  line-height: 3;
  text-decoration: none;
  background: var(--element-color);
  box-shadow: var(--shadow);
  border-radius: 6px;
`;

const Detail = styled.div`
  display: grid;
  gap: 5rem;
  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-items: center;
  }
`;

const Flag = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  box-shadow: var(--shadow);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header header'
      'left right'
      'footer footer';
    gap: 5rem;
  }
`;

const Title = styled.h2`
  grid-area: header;
  font-size: 1.8em;
`;

const List = styled.ul`
  grid-area: left;
  &:not(:first-of-type) {
    grid-area: right;
  }
`;

const Item = styled.li`
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
`;

const Border = styled.div`
  grid-area: footer;
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
`;

const Tag = styled(Button)`
  padding: 1rem;
  line-height: 1;
  margin: 0.5rem;
`;

export default Country;
