import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledUser = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserName = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

function User() {
  const userName = useSelector((state) => state.user.name);

  if (!userName) return null;
  return (
    <StyledUser>
      <UserName>{userName}</UserName>
    </StyledUser>
  );
}

export default User;
