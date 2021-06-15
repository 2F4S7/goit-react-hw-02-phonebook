import Btn from './header/btn';
import './header/btn.module.css';

import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';

// class ContactForm extends Component {

// }

class App extends Component {
  render() {
    // state = {
    //   contacts: [
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //   ],
    //   filter: '',
    // };

    return (
      <>
        <Btn title="React Home Work Phonebook 02" />
        <ContactForm />
      </>
    );
  }
}

export default App;
