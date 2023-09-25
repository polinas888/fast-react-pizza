import { useState } from 'react';
import Button from '../../ui/buttons/Button';
import { updateUser } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FormCreateUser,
  FormCreateUserText,
  InputCreateUser,
} from '../../ui/forms/FormCreateUser';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateUser(username));
    navigate('/menu');
  }

  return (
    <FormCreateUser onSubmit={handleSubmit}>
      <FormCreateUserText>
        👋 Welcome! Please start by telling us your name:
      </FormCreateUserText>

      <InputCreateUser
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button variant="primary">Start ordering</Button>
        </div>
      )}
    </FormCreateUser>
  );
}

export default CreateUser;
