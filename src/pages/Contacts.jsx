import React from 'react';
import ContactList from '../components/ContactList/ContactList';
import { Outlet } from 'react-router-dom';
import { useGetContactsQuery } from '../redux/contactsSlice';
import SearchBar from '../components/SearchBar/SearchBar';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const useContacts = () => {
  const filter = useSelector(state => state.filter.value);
  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        if (isNaN(filter)) {
          return contacts
            ? contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()),
              )
            : [];
        }
        if (!isNaN(filter)) {
          return contacts
            ? contacts.filter(contact =>
                contact.number.split('-').join('').includes(filter),
              )
            : [];
        }
      },
    );
  }, []);

  return useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: selectFilteredContacts(result, filter),
      };
    },
  });
};

function Contacts() {
  const { filteredContacts, isLoading, error } = useContacts();

  return (
    <>
      <SearchBar />
      {error && <p>Error</p>}
      {isLoading ? <p>Loading...</p> : <ContactList items={filteredContacts} />}
      <Outlet />
    </>
  );
}

export default Contacts;
