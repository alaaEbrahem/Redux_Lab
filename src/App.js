import React, { Component } from 'react';
import './App.css';
import TaskBar from './components/TaskBar/TaskBar';
import TaskList from './components/TaskList/TaskList';
import DeletedList from './components/TaskList/DeletedList';
import CompetedList from './components/TaskList/CompetedList';

export const MyContext = React.createContext({
  data: [{ text: 'alaa Ebrahem', completed: false, deleted: false, id: 1 }
    , { text: 'ayaEbrahem', completed: false, deleted: false, id: 2 },
  { text: 'sara Ebrahem', completed: false, deleted: false, id: 3 }],

});
class App extends Component {
  state = {

    data: [{ text: 'alaa Ebrahem', completed: false, deleted: false, id: 1 }
      , { text: 'ayaEbrahem', completed: false, deleted: false, id: 2 },
    { text: 'sara Ebrahem', completed: false, deleted: false, id: 3 }]

  }
  addToDo = (todo) => {
    const { data } = this.state;
    this.setState({ data: data.concat(todo) })
  }
  deleteToDo=(id)=>{
    const index = id;
    const newArray= this.state.data.map((item) => (
        item.id==index? {...item, deleted: !item.deleted}: item
    ))
    this.setState({ data:newArray});

  }
  doneToDo=(id)=>{
    const index = id;
             
    const newArray=  this.state.data.map((item) => (
        item.id==index? {...item, completed: !item.completed}: item
    ))
    this.setState({ data:newArray});
  }
  render() {
    const value={
      state:this.state,
      addToDo:this.addToDo,
      deleteToDo:this.deleteToDo,
      doneToDo:this.doneToDo,
    }
    return (
      <MyContext.Provider value={value}>
        <div className="App">
          <div className="App  container mt-2 py-5">
           
            <TaskBar />
            <TaskList />

          </div>
          <div className="App container mt-5 py-5 col-8">
    
      <DeletedList/>
    
    </div>
          <div className="App container mt-5 py-5">
    
      <CompetedList/>
    
    </div>
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
