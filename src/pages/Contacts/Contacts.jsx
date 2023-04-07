import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/Authentification/selectors';
import { ContactForm } from 'components/Form/contactForm';
import { Heading } from 'pages/Home/Home.styled';
import { Filter } from 'components/Filter/contactFilter';
import { ContactList } from 'components/List/contactList';
import { UserMenu } from 'components/Menu/userMenu';

const Contacts = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <>
      <Heading>Phonebook 📖</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
      {isLogged && <UserMenu user={user} />}
    </>
  );
};

export default Contacts;
