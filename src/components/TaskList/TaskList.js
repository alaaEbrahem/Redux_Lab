import React from 'react';
import { connect } from 'react-redux';
import TaskCard from './Card';
class TaskList extends React.Component {
    render() {
        const data = this.props.tasks.filter(t => !(t.completed || t.deleted)).map(t => (<TaskCard key={t.id} del={t.deleted} comp={t.completed} text={t.text} id={t.id} />));

        return (
            <>

                {data}
            </>

        );
    }
};
function mapStateToProps(state) {
    return {
        tasks: state.data
    }
}
export default connect(mapStateToProps)(TaskList);