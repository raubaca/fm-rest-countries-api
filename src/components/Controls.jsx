import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';

import { REGIONS } from '../utils/constants';
import search from '../assets/search.svg';
import chevronDown from '../assets/chevron-down.svg';
// Light icons
import chevronDownLight from '../assets/chevron-down-white.svg';
import searchLight from '../assets/search-white.svg';

const Controls = ({ onSearch, onFilter }) => {
  const { theme } = useContext(AppContext);

  return (
    <Container>
      <Search
        name="search"
        type="search"
        placeholder="Search for a country..."
        autoComplete="off"
        onChange={onSearch}
        icon={theme === 'light' ? search : searchLight}
      />
      <Select
        as="select"
        name="region"
        aria-label="region"
        defaultValue=""
        onChange={onFilter}
        icon={theme === 'light' ? chevronDown : chevronDownLight}
      >
        <option value="">Filter by Region</option>
        {REGIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </Select>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 5.5rem;
  color: var(--input-color);
  font-size: 1.4rem;
  box-shadow: var(--shadow);
  border-radius: 6px;
`;

const Search = styled(Input)`
  padding: 0 1rem 0 7.5rem;
  background: ${({ icon }) =>
    ` var(--element-color) url(${icon}) no-repeat 3rem center / 18px`};
  @media screen and (min-width: 769px) {
    max-width: 480px;
  }
`;

const Select = styled(Input)`
  padding: 0 2.5rem;
  background: ${({
    icon,
  }) => `var(--element-color) url(${icon}) no-repeat right 1.5rem
    center / 15px;`};
  option {
    color: inherit;
  }
  @media screen and (min-width: 769px) {
    max-width: 200px;
  }
`;

export default Controls;
