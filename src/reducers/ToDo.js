export default (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, data: [...state.data, action.data] };
        case 'DELETE_TODO':{
      
            const index = action.id;
            const newArray=  state.data.map((item) => (
                item.id==index? {...item, deleted: !item.deleted,completed:false}: item
            ))
        return { ...state,data:newArray};
        }
        case 'DONE_TODO':{
          
              const index = action.id;
             
              const newArray=  state.data.map((item) => (
                  item.id==index? {...item, completed: !item.completed}: item
              ))
          return { ...state,data:newArray};
          }
          case 'UN_DELETE_TODO':{
          
            const index = action.id;
           
            const newArray=  state.data.map((item) => (
                item.id==index? {...item, deleted: false}: item
            ))
        return { ...state,data:newArray};
        }
            default:
            return state; 
        }
    
    }
  