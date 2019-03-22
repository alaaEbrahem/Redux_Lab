import React from 'react';
class TaskCard extends React.Component { 
     
    handleClick = (e) => {
    
        this.props.deleteToDo(e.target.dataset.id);
      }
      handleClick1 = (e) => {
    
        this.props.doneToDo(e.target.dataset.id);
      }

      handleUnDelete=(e)=>{
        this.props.deleteToDo(e.target.dataset.id);   
      }
    render(){
  
     return(
            <>
         <div className="listItems">
            <div key={this.props.id}>
                <span className="name">{this.props.text}</span>
{(!(this.props.del))?
                <span onClick={this.handleClick} data-id={this.props.id} className="action icon" >x
        
        </span>
        :""}
        {(!(this.props.del))?
                <span className="action title" > 
      
                <button onClick={this.handleClick1}  data-id={this.props.id} type="button" class="btn btn-info">{(this.props.comp)?'UnDo':'Done'}</button>
                
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
 
  export default TaskCard;
