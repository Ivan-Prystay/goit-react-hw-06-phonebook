import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

export function App() {
  /*  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const storageContacts = localStorage.getItem('contacts');
  const contactsParsed = JSON.parse(storageContacts);

  useEffect(() => {
    if (contactsParsed) {
      setContacts(contactsParsed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  */

  return (
    <div
      style={{
        paddingLeft: '24px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
