import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import toast from 'react-hot-toast';
import { Box } from '../Box';
import { ContactLabel, ContactInput, AddBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const addedName = form.elements.name.value;
    const addedNumber = form.elements.number.value;

    if (contacts.find(contact => contact.name === addedName)) {
      toast.error(`${addedName} is already in contacts`, {
        duration: 3000,
        position: 'top-center',
      });
    } else {
      dispatch(addContact({ name: addedName, phone: addedNumber }));
    }

    form.reset();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      as="form"
      display="flex"
      flexDirection="column"
      width="100%"
      m="0 auto 20px"
    >
      <Box display="flex" flexDirection="column" m="0 auto 10px">
        <ContactLabel htmlFor="name">Name</ContactLabel>
        <ContactInput
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Box>
      <Box display="flex" flexDirection="column" m="0 auto 20px">
        <ContactLabel htmlFor="number">Number</ContactLabel>
        <ContactInput
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Box>
      <AddBtn type="submit">Add contact</AddBtn>
    </Box>
  );
};
