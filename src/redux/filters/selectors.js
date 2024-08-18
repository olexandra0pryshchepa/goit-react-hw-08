export const selectNameFilter = state => state.filters.name;

export const selectFilter = state => {
  const filter = state.filters.name.toLowerCase();
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
