import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import { ContactItem, DeleteContact } from './Contact.styled';

export function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem key={id}>
      {name}
      {': '}
      {number}
      <DeleteContact type="button" onClick={handleDelete}>
        Delete contact
      </DeleteContact>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
