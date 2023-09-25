import { useRouteError } from 'react-router-dom';
import BackButton from './buttons/BackButton';
import styled from 'styled-components';

const StyledError = styled.div`
  text-align: center;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
`;

function Error() {
  const error = useRouteError();

  return (
    <StyledError>
      <ErrorMessage>Something went wrong 😢</ErrorMessage>
      <p>{error.data || error.message}</p>
      <BackButton to="-1">&larr; Go back</BackButton>
    </StyledError>
  );
}

export default Error;
