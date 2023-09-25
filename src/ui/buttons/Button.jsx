import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import SmallButton from './SmallButton';
import RoundButton from './RoundButton';
import SecondaryButton from './SecondaryButton';

function Button({ children, to, variant, onClick }) {
  const renderButton = () => {
    switch (variant) {
      case 'primary':
        return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
      case 'small':
        return <SmallButton onClick={onClick}>{children}</SmallButton>;
      case 'round':
        return <RoundButton onClick={onClick}>{children}</RoundButton>;
      case 'secondary':
        return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
      default:
        return null;
    }
  };

  if (to) {
    return <Link to={to}>{renderButton()}</Link>;
  }

  return renderButton();
}

export default Button;
