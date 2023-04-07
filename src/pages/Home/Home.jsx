import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Authentification/operations';
import { selectUser, selectIsLoggedIn } from 'redux/Authentification/selectors';
import { Heading, UserLink, Text } from './Home.styled';
import { LogOutButton } from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleClick = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>Hi there, {user.name}!</Heading>
          <Text>Let's go back to your phonebook!</Text>
          <UserLink to="/contacts">📖</UserLink>
          <Text>or let's use another account</Text>
          <LogOutButton type="button" onClick={handleClick}>
            Logout
          </LogOutButton>
        </>
      ) : (
        <>
          <Heading>Welcome to your phonebook!📱</Heading>
          <Text>Go ahead and</Text>
          <UserLink to="/login">Log-in</UserLink>
          <Text>or</Text>
          <UserLink to="/register">Sign-up</UserLink>
        </>
      )}
    </>
  );
};

export default Home;
