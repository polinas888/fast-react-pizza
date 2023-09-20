import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <div>
      <fetcher.Form method="PATCH" className="text-right">
        <Button variant="primary">Set priority</Button>
      </fetcher.Form>
    </div>
  );
}

export default UpdateOrder;
