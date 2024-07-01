// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

function ContactListItem({ contact, deleteContact, toCapitalize }) {
  return (
    <li className={css.contact}>
      <span className={css.contactItemSpan}>
        {toCapitalize(contact.name)}: {contact.number}
      </span>
      <button
        className={css.contactItemButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
    toCapitalize: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

export default ContactListItem;

// export class ContactListItem extends Component {
//   static propTypes = {
//     contact: PropTypes.object.isRequired,
//     toCapitalize: PropTypes.func.isRequired,
//     deleteContact: PropTypes.func.isRequired,
//   };
//   render() {
//     const { contact, deleteContact, toCapitalize } = this.props;
//     return (
//       <li className={css.contact}>
//         <span className={css.contactItemSpan}>
//           {toCapitalize(contact.name)}: {contact.number}
//         </span>
//         <button
//           className={css.contactItemButton}
//           onClick={() => deleteContact(contact.id)}
//         >
//           Delete
//         </button>
//       </li>
//     );
//   }
// }

// export default ContactListItem;
