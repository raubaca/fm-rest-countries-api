import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  const error = useRouteError();
  return (
    <Container>
      <Title>Oops!</Title>
      <Text>Sorry, an unexpected error has ocurred</Text>
      <Description>{error.statusText || error.message}</Description>
      <GoBack to="/">&larr; Go Back</GoBack>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const Text = styled.p`
  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-style: italic;
`;

const GoBack = styled(Link)`
  color: inherit;
`;

export default Error;
