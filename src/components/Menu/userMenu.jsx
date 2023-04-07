import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Authentification/operations';
import { User, UserName, UserButton } from './userMenu.styled';

export const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logOut());

  return (
    <User>
      <UserName>{user.name}</UserName>
      <UserButton onClick={handleClick}>Log-out</UserButton>
    </User>
  );
};
