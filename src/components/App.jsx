// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchFilter from './SearchFilter/SearchFilter';
import ContactList from './ContactList/ContactList';

const initialContacts = () => {
  if (localStorage.getItem('contacts') !== null) {
    return JSON.parse(localStorage.getItem('contacts'));
  } else {
    return [
      { id: 'id-1', name: 'Jennie Kim', number: '459-12-56' },
      { id: 'id-2', name: 'Kim Jisoo', number: '443-89-12' },
      { id: 'id-3', name: 'Im Nayeon', number: '645-17-79' },
      { id: 'id-4', name: `Mary Kris Malenab`, number: '227-91-26' },
    ];
  }
};

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toCapitalize = phrase => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const toFilter = phrase => {
    setFilter(phrase);
  };

  const filterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    // setContacts(prevContacts => {
    //   const updatedContacts = prevContacts.filter(contact => contact.id !== id);
    //   // console.log('Updated contacts after deleting:', updatedContacts);
    //   return updatedContacts;
    // });
  };

  const addContact = newContact => {
    // setContacts([...contacts, newContact]);
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact];
      // console.log('Updated contacts after adding:', updatedContacts);
      return updatedContacts;
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm
        addContact={addContact}
        contacts={contacts}
        toCapitalize={toCapitalize}
      />
      <h2>Contacts</h2>
      <SearchFilter filter={filter} toFilter={toFilter} />
      <ContactList
        filterContacts={filterContacts}
        deleteContact={deleteContact}
        toCapitalize={toCapitalize}
      />
    </div>
  );
}

export default App;

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Jennie Kim', number: '459-12-56' },
//       { id: 'id-2', name: 'Kim Jisoo', number: '443-89-12' },
//       { id: 'id-3', name: 'Im Nayeon', number: '645-17-79' },
//       { id: 'id-4', name: `Mary Kris Malenab`, number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidUpdate(_prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   componentDidMount() {
//     if (localStorage.getItem('contacts') !== null) {
//       this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
//     } else {
//       this.setState({
//         contacts: [
//           { id: 'id-1', name: 'Jennie Kim', number: '459-12-56' },
//           { id: 'id-2', name: 'Kim Jisoo', number: '443-89-12' },
//           { id: 'id-3', name: 'Im Nayeon', number: '645-17-79' },
//           { id: 'id-4', name: `Mary Kris Malenab`, number: '227-91-26' },
//         ],
//       });
//     }
//   }

//   toCapitalize = phrase => {
//     return phrase
//       .toLowerCase()
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   toFilter = phrase => {
//     this.setState({
//       filter: phrase,
//     });
//   };

//   filterContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(
//       contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.includes(filter)
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   addContact = newContact => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <div>
//         <h2>Phonebook</h2>
//         <ContactForm
//           addContact={this.addContact}
//           reset={this.reset}
//           contacts={contacts}
//           toCapitalize={this.toCapitalize}
//         />
//         <h2>Contacts</h2>
//         <SearchFilter filter={filter} toFilter={this.toFilter} />
//         <ContactList
//           filterContacts={this.filterContacts}
//           deleteContact={this.deleteContact}
//           toCapitalize={this.toCapitalize}
//         />
//       </div>
//     );
//   }
// }

// export default App;
