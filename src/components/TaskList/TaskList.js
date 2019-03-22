import React from 'react';
import TaskCard from './Card';
import { MyContext } from '../../App'
class TaskList extends React.Component {
    render() {

        return (
            <MyContext.Consumer>
                {value => (
                    <React.Fragment>
                           <h1 className="text-center header">Doing List</h1>
                        {value.state.data.filter(t => !(t.completed || t.deleted)).map(t => (<TaskCard deleteToDo={value.deleteToDo} doneToDo={value.doneToDo} key={t.id} del={t.deleted} comp={t.completed} text={t.text} id={t.id} />))}

                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
};

export default TaskList;