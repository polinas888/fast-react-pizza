import styled from 'styled-components';

export const ProgressCircle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: ${(props) => props.strokeWidth}px solid #ccc;
  border-top-color: ${(props) => props.color};
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(171, 184, 195, 0.2);
  backdrop-filter: blur(4px);
`;
