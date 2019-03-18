import React from 'react';
import { connect } from 'react-redux';
import TaskCard from './Card';
class DeletedList extends React.Component {
    render() {


        const data = this.props.tasks.map(t => (<TaskCard key={t.id} text={t.text} del="true" id={t.id} />));
        console.log(this.props.tasks.filter(t => (t.deleted == true)));
        return (
            <>
              <h1 className="text-center header">Deleted List</h1>
                {data}
            </>

        );
    }
};
function mapStateToProps(state) {
    //    const newState=state.data.filter(t => ( t.deleted==true))
    return {
        tasks: state.data.filter(t => (t.deleted == true))
    }
}
export default connect(mapStateToProps)(DeletedList);