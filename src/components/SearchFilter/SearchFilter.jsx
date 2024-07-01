import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

export class SearchFilter extends Component {
  static propTypes = {
    toFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };

  handleChange = e => {
    const { value } = e.target;
    this.props.toFilter(value);
  };
  render() {
    const { filter } = this.props;
    return (
      <div className={css.filterContainer}>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={filter}
          onChange={this.handleChange}
          className={css.filterInput}
        />
      </div>
    );
  }
}

export default SearchFilter;
