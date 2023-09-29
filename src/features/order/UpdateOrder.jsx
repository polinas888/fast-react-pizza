import Button from '../../ui/buttons/Button';

function UpdateOrder({ onClick }) {
  return (
    <div>
      <Button variant="primary" type="button" onClick={onClick}>
        Set priority
      </Button>
    </div>
  );
}

export default UpdateOrder;
