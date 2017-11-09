import React, { Component } from 'react';
import '../stylesheets/App.css';
import Flow from './Flow'

class App extends Component {  
  
  state = {rules: [
    {id: 1, title: 'Rule Title 1', body: function(obj){ return !obj; }, true_id: 4, false_id: 3},
    {id: 2, title: 'Rule Title 2', body: function(obj){ return !obj; }},
    {id: 3, title: 'Rule Title 3', body: function(obj){ return !obj; }, true_id: 2, false_id: null},
    {id: 4, title: 'Rule Title 4', body: function(obj){ return obj; }, true_id: 5, false_id: 6},
    {id: 5, title: 'Rule Title 5', body: function(obj){ return !obj; }},
    {id: 6, title: 'Rule Title 6', body: function(obj){ return !obj; }, true_id: null, false_id: null}
  ],
  entry: false}   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to FriendSurance Test</h1>
        </header>      
        <div className="container">
          <Flow entry={this.state.entry} rules={this.state.rules}/>        
        </div>
      </div>
    );
  }
}

export default App;
