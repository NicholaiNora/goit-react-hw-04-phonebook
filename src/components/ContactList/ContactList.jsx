import ContactListItem from 'components/ContactListItem/ContactListItem';
import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

function ContactList({ filterContacts, toCapitalize, deleteContact }) {
  const filteredContacts = filterContacts();
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          toCapitalize={toCapitalize}
          deleteContact={deleteContact}
          contact={contact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
    filterContacts: PropTypes.func.isRequired,
    toCapitalize: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

export default ContactList;

// export class ContactList extends Component {
//   static propTypes = {
//     filterContacts: PropTypes.func.isRequired,
//     toCapitalize: PropTypes.func.isRequired,
//     deleteContact: PropTypes.func.isRequired,
//   };
//   render() {
//       const { filterContacts, toCapitalize, deleteContact } = this.props;
//       const filteredContacts = filterContacts();
//     return (
//       <ul className={css.contactList} >
//         {filteredContacts.map(contact => (
//           <ContactListItem
//             key={contact.id}
//             toCapitalize={toCapitalize}
//             deleteContact={deleteContact}
//             contact={contact}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ContactList;
