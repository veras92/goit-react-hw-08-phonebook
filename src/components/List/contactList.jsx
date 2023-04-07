import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/Contacts/selectors';
import { selectFilteredContacts } from 'redux/Filter/selectors';
import { deleteContact } from 'redux/Contacts/operations';
import { Item, Number, Button } from './contactList.styled';

export const ContactList = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteClick = id => dispatch(deleteContact(id));

  return (
    <>
      {isLoading && !error && <Item>Loading...</Item>}
      <ul>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <Item key={id}>
              {name}: <Number>{number}</Number>
              <Button type="button" onClick={() => onDeleteClick(id)}>
                Delete
              </Button>
            </Item>
          );
        })}
      </ul>
      {error && !isLoading && <Item>Oops, something went wrong :(</Item>}
    </>
  );
};
