import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import { useTheme } from './hooks/useTheme';
import { getCountries } from './services/countries';

export const loader = async () => {
  const countries = await getCountries();
  return countries;
};

export const AppContext = createContext(null);

const App = () => {
  const countries = useLoaderData();
  const { theme, toggleTheme } = useTheme();

  return (
    <AppContext.Provider value={{ data: countries, theme }}>
      <Header onSwitchTheme={toggleTheme} theme={theme} />
      <Main>
        <Outlet />
      </Main>
    </AppContext.Provider>
  );
};

const Main = styled.main`
  padding-inline: 1.5rem;
  max-width: 131rem;
  margin: auto;
`;

export default App;
