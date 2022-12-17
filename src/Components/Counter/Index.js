import React from 'react'
import { useReducer } from 'react';
const initialState={count:0};
function reducer(state,action){
    
    switch(action.type){
        case "increment":
            return {count:state.count+1};
        case "decrement":
            if(state.count>1){
                return {count:state.count-1};
            }
            else{
                return {count:state.count=0};
            }
        case "deleteAllTask":
            return {count:state.count=0};
        default:
            return new Error();            
    }
}
const Index=()=> {
    
    const [state, dispatch]=useReducer(reducer,initialState);
    
  return (
    <div class="counter">
        <h2>Task Counter</h2>
       <button type="submit" id="addTaskBtn" onClick={()=>dispatch({type:"increment"})}>Add a task</button>&nbsp;
       <button type="submit" id="delTaskBtn" onClick={()=>dispatch({type:"decrement"})}>Delete a task</button>&nbsp;
       <button type="submit" id="delAllTaskBtn" onClick={()=>dispatch({type:"deleteAllTask"})}>Delete All task</button><br/>

        <h3>Number Of Tasks : {state.count}</h3>
    </div>
  );
}

export default Index