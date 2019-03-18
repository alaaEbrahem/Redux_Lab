import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/DeleteToDo';
import { undeleteTodo } from '../../actions/DeleteToDo';
import { doneTodo } from '../../actions/Done';
// import {bindActionCreators} from 'redux';
// import deleteTask from '../../actions/index'

class TaskCard extends React.Component { 
   
   
    handleClick = (e) => {
    
        this.props.deleteTodo(e.target.dataset.id);
      }
      handleClick1 = (e) => {
    
        this.props.DoneTodo(e.target.dataset.id);
      }

      handleUnDelete=(e)=>{
        this.props.UnDel(e.target.dataset.id);   
      }
    render(){
  
     return(
            <>
         <div className="listItems">
            <div key={this.props.id}>
                <span className="name">{this.props.text}</span>
{(this.props.del!="true")?
                <span onClick={this.handleClick} data-id={this.props.id} className="action icon" >x
        
        </span>
        :""}
        {(this.props.del!="true")?
                <span className="action title" > 
      
                <button onClick={this.handleClick1}  data-id={this.props.id} type="button" class="btn btn-info">{(this.props.comp=="true")?'UnDo':'Done'}</button>
                
                </span>:
             <span className="action title" > 
      
             <button onClick={this.handleUnDelete}  data-id={this.props.id} type="button" class="btn btn-info">UnDo</button>
             
             </span>
            }
               
            </div>
        </div>
    
    
        </>
        );
    }
   
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    DoneTodo: id => dispatch(doneTodo(id)),
    UnDel: id => dispatch(undeleteTodo(id)),
  });
  
  export default connect(null, mapDispatchToProps)(TaskCard);
