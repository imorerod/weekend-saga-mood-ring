import React, { Component } from 'react';
import './App.css';
import ImageList from '../ImageList/ImageList';
import TagsList from '../TagsList/TagsList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <ImageList />
      <TagsList />
      </div>
    );
  }
}

export default App;
