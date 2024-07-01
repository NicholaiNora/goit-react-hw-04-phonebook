import ContactListItem from 'components/ContactListItem/ContactListItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export class ContactList extends Component {
  static propTypes = {
    filterContacts: PropTypes.func.isRequired,
    toCapitalize: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };
  render() {
      const { filterContacts, toCapitalize, deleteContact } = this.props;
      const filteredContacts = filterContacts();
    return (
      <ul className={css.contactList} >
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
}

export default ContactList;
