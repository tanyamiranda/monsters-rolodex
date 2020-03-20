import React from 'react';
import './Monsters.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import MONSTERS_DATA from './monsters-data.json';

class Monsters extends React.Component {

  constructor() {
    
    super();
    
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  
  // When writing functions, there are two ways to write it so it 
  // takes in the scope of the calling component. 
  //
  // First, explicitly define the function so that any calls 
  // to the function takes in the component as the caller as its
  // scope. By stating the arrow function "e =>", you are asking
  // the compiler to bind the scope to the caller.
  changeMonsters = e => {
    this.setState({searchField: e.target.value})
  }
  // Second, define the function normally, but when called use
  // the arrow function to pass in the scope. So when calling
  // the function, you would write "e => this.changeMonsters2(e)"
  // This may lead to compilation, undefined, or out-of-scope errors
  // if the function is called without using the arrow function.
  changeMonsters2 (e) {
    this.setState({searchField: e.target.value})
  }

  //Whenever the state is updated, render() method is called
  render() {

    const {monsters, searchField} = this.state;
    //The line above is equivalent to the two below.
    //Just another way to write the same code. 
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    //This variable is passed into the CardList monsters property
    const filteredMonsters = monsters.filter( 
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
              
        <div className="Monsters">
          <div className="monster-header">Monsters Rolodex</div>
          <SearchBox placeHolder="search monsters" changeHandler={
            //this.changeMonsters --this works too, but can only call one or the other
            e => this.changeMonsters2(e)
          } />
          <br/><br/>
          <CardList monsters={filteredMonsters} />
        </div>
     
    )
  }

  // Life Cycle Method called whenever the page is rendered.
  componentDidMount() {
    
    //fetch("https://jsonplaceholder.typicode.com/users")
    //.then(response => response.json())
    //.then(users => this.setState({monsters:users}));

    // I decided to use my own data insted of the websites so I can customize
    this.setState({monsters: MONSTERS_DATA}
      //, () => (console.log("monsters.json", this.state.monsters))
      );

  }
}

export default Monsters;
