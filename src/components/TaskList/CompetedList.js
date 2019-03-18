import React from 'react';
import { connect } from 'react-redux';
import TaskCard from './Card';
class CompletedList extends React.Component {
    render() {

        const data = this.props.tasks.map(t => (<TaskCard key={t.id} text={t.text} comp="true" id={t.id} />));
        console.log(this.props.tasks.filter(t => (t.completed == true)));
        return (
            <>
              
              <h1 className="text-center header">Completed List</h1>
                {data}
            </>

        );
    }
};
function mapStateToProps(state) {
    //    const newState=state.data.filter(t => ( t.deleted==true))
    return {
        tasks: state.data.filter(t => (t.completed == true))
    }
}
export default connect(mapStateToProps)(CompletedList);