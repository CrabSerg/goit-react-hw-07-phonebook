import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { ContactItem } from './ContactItem.styled';
import { Box } from 'components/Box';
import { ContactName, ContactNumber, DeleteBtn } from './ContactItem.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItem>
      <Box>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.phone}</ContactNumber>
      </Box>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
