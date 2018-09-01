import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar'
//import Map from './containers/Map'
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  render() {
    return (

      <div >
      <Navbar/>  
      <SearchBar/>

      </div>
    );
  }
}

export default App;
