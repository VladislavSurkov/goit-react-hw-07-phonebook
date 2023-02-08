import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  deleteContact,
} from '../../redux/contactsFetch';
import { Btn, Contacts, ContactsItem, User } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onfilter = useSelector(getFilter);

  const filteredContacts =  contacts.filter(contact =>
      contact.name.toLowerCase().includes(onfilter.toLowerCase())
    );

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <ContactsItem key={id}>
            <User>
              {name}: {phone} 
            </User>
            <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Btn>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};
