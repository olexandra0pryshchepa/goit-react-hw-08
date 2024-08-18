import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilter } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
}
