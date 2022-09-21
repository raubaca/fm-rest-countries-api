import styled from 'styled-components';

import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

const Header = ({ onSwitchTheme, theme }) => {
  const themeLight = theme === 'light';
  return (
    <Container>
      <Title>Where in the world?</Title>
      <Toggle type="button" onClick={onSwitchTheme}>
        <img src={themeLight ? moon : sun} alt="Moon" width={16} />
        <span>{themeLight ? 'Dark' : 'Light'} Mode</span>
      </Toggle>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  margin-bottom: 2.5rem;
  padding-inline: 1.5rem;
  background: var(--element-color);
  box-shadow: var(--shadow);
  @media screen and (min-width: 769px) {
    margin-bottom: 5rem;
  }
  @media screen and (min-width: 1310px) {
    padding-inline: calc(50% - 640px); /* no wrapper element needed */
  }
`;

const Title = styled.h1`
  font-size: 1.1em;
  @media screen and (min-width: 769px) {
    font-size: 1.5em;
  }
`;

const Toggle = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  color: inherit;
  font-weight: 600;
  background: transparent;
`;

export default Header;
