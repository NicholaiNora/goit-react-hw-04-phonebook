import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchFilter from './SearchFilter/SearchFilter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Jennie Kim', number: '459-12-56' },
      { id: 'id-2', name: 'Kim Jisoo', number: '443-89-12' },
      { id: 'id-3', name: 'Im Nayeon', number: '645-17-79' },
      { id: 'id-4', name: `Mary Kris Malenab`, number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(_prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    if (localStorage.getItem('contacts') !== null) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    } else {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Jennie Kim', number: '459-12-56' },
          { id: 'id-2', name: 'Kim Jisoo', number: '443-89-12' },
          { id: 'id-3', name: 'Im Nayeon', number: '645-17-79' },
          { id: 'id-4', name: `Mary Kris Malenab`, number: '227-91-26' },
        ],
      });
    }
  }

  toCapitalize = phrase => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  toFilter = phrase => {
    this.setState({
      filter: phrase,
    });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          addContact={this.addContact}
          reset={this.reset}
          contacts={contacts}
          toCapitalize={this.toCapitalize}
        />
        <h2>Contacts</h2>
        <SearchFilter filter={filter} toFilter={this.toFilter} />
        <ContactList
          filterContacts={this.filterContacts}
          deleteContact={this.deleteContact}
          toCapitalize={this.toCapitalize}
        />
      </div>
    );
  }
}

export default App;
