import { createSelector } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name;

export const selectContacts = state => state.contacts.items;

export const selectFilter = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);