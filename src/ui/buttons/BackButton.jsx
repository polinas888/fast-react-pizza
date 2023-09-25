import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const StyledBackButton = styled.button`
  font-size: 0.8rem;
  color: #3b82f6;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

function BackButton({ children, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to === '-1') {
      navigate(-1);
    }
  };

  return (
    <>
      {to === '-1' ? (
        <StyledBackButton onClick={handleClick}>
          &larr; Go back
        </StyledBackButton>
      ) : (
        <Link to={to} className={StyledBackButton}>
          {children}
        </Link>
      )}
    </>
  );
}

export default BackButton;
