import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const extaActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extaActions.map(action => action[type]);

const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsReducer = (state, action) => {
  state.contacts = action.payload;
};

const addContactReducer = (state, action) => {
  state.contacts.push(action.payload);
};

const deleteContactReducer = (state, action) => {
  const index = state.contacts.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.splice(index, 1);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(addContact.fulfilled, addContactReducer)
      .addCase(deleteContact.fulfilled, deleteContactReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer);
  },
});

export const contactsReducer = contactsSlice.reducer;
