import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchForm, SearchInput } from '../../ui/forms/SearchForm';

function SearchOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();

  function handleSearchOrder(e) {
    e.preventDefault();
    navigate(`/order/${orderNumber}`);
    setOrderNumber('');
  }

  return (
    <SearchForm onSubmit={handleSearchOrder}>
      <SearchInput
        placeholder="Search order #"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
    </SearchForm>
  );
}

export default SearchOrder;
