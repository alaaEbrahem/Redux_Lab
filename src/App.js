import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from './components/TaskBar/TaskBar';
import TaskList from './components/TaskList/TaskList';
import DeletedList from './components/TaskList/DeletedList';
import CompetedList from './components/TaskList/CompetedList';
import Header from './components/Header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
    <div className="App  container mt-2 py-5">
    <Header/>
    <TaskBar/>
      <TaskList/>
    
    </div>
    <div className="App container mt-5 py-5 col-8">
    
      <DeletedList/>
    
    </div>
    <div className="App container mt-5 py-5">
    
      <CompetedList/>
    
    </div>
      </div>
    );
  }
}

export default App;
