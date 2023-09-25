import { useFetcher } from 'react-router-dom';
import Button from '../../ui/buttons/Button';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <div>
      <fetcher.Form method="PATCH">
        <Button variant="primary">Set priority</Button>
      </fetcher.Form>
    </div>
  );
}

export default UpdateOrder;
