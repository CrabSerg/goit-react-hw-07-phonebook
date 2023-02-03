import { GlobalStyle } from 'GlobalStyles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { selectLoading, selectError } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
import { Toaster } from 'react-hot-toast';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box width="800px" m="0 auto" p="30px">
      <Title>Phonebook</Title>
      <Box display="flex" justifyContent="space-around">
        <Box>
          <Subtitle>Contacts</Subtitle>
          <Filter />
          {isLoading && !error && <b>Loading...</b>}
          <ContactList />
        </Box>
        <Box>
          <Subtitle>Add contact</Subtitle>
          <ContactForm />
        </Box>
      </Box>
      <Toaster />
      <GlobalStyle />
    </Box>
  );
};
