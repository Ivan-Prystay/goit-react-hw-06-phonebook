import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getValueFilter, getContacts } from 'redux/selectors';
import { ListContact } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getValueFilter);

  const filterContact = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  let arr = filterContact();
  if (!filterContact) {
    arr = contacts;
  }

  return (
    <ListContact>
      {arr.map(item => (
        <Contact key={item.id} contact={item} />
      ))}
    </ListContact>
  );
}
