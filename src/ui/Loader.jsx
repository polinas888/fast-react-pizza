import '../index.css';
import { ProgressCircle, LoaderContainer } from './StyledLoader';

function Loader() {
  return (
    <LoaderContainer>
      <ProgressCircle
        size={100}
        strokeWidth={8}
        color="#787878"
      ></ProgressCircle>
    </LoaderContainer>
  );
}

export default Loader;
