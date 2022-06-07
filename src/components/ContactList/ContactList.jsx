import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ContactItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
