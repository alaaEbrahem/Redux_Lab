import React from 'react';
import {MyContext} from '../../App'
import TaskCard from './Card';
class DeletedList extends React.Component {
    render() {

        return (
            <MyContext.Consumer>
                {value => (
                    <React.Fragment>
                          <h1 className="text-center header">Deleted List</h1>
       {value.state.data.filter(t => (t.deleted)).map(t => (<TaskCard deleteToDo={value.deleteToDo} key={t.id} del={t.deleted} comp={t.completed} text={t.text} id={t.id} />))}
   
                    </React.Fragment>
                )}
            </MyContext.Consumer>


        );
    }
   
};

export default  DeletedList;