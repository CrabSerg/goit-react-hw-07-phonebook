import { Contact } from '../ContactItem/ContactItem';
import { Notification } from '../Notification/Notification';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectLoading } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
      {filteredContacts.length < 1 && !isLoading && <Notification />}
    </div>
  );
};
