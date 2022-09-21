import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { formatNumber } from '../utils/format';

const CountryList = ({ countries }) => (
  <Container>
    <List>
      {countries.map((c) => (
        <Card key={c.cca3}>
          <Link to={`/${c.cca3.toLowerCase()}`}>
            <Flag src={c.flags.svg} alt={c.name.common} />
          </Link>
          <Info>
            <Title>{c.name.common}</Title>
            <Text>
              <strong>Population:</strong> {formatNumber(c.population)}
            </Text>
            <Text>
              <strong>Region:</strong> {c.region}
            </Text>
            <Text>
              <strong>Capital:</strong>{' '}
              {c.capital?.length ? c.capital[0] : null}
            </Text>
          </Info>
        </Card>
      ))}
    </List>
  </Container>
);

const Container = styled.div`
  margin-bottom: 2.5rem;
  @media screen and (min-width: 769px) {
    margin-bottom: 5rem;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 7.5rem;
`;

const Card = styled.li`
  background-color: var(--element-color);
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const Flag = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 53 / 32; /* To match the design */
  object-fit: cover;
`;

const Info = styled.div`
  padding: 3rem 2rem 4rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default CountryList;
