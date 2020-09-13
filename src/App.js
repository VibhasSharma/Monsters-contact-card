import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();           // super() calls the constructor method on the component class
    this.state = {     // which gives us access to this.state
      contacts:[],     // Initially empty array as we donot want to hardcode
      searchField: ''  // The data is received from an API    
    };      
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({contacts: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {contacts, searchField} = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Contacts Card</h1>
        <SearchBox
          placeholder='search contacts'
          handleChange={this.handleChange}
        />
        <CardList contacts = {filteredContacts}/>
    </div>
    )
  }
}


export default App;
