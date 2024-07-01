import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    toCapitalize: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(value);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact, contacts, reset, toCapitalize } = this.props;
    const contactExists = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    console.log(toCapitalize(name));
    if (contactExists) {
      alert(`${toCapitalize(name)} or ${number} is already in contacts.`);

      return;
    }
    addContact({ id: nanoid(), name: name, number: number });
    reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={this.handleChange}
            className={css.formInput}
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formSpan}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
            className={css.formInput}
          />
        </label>

        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
