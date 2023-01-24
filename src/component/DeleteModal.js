import React from "react";

function Main(props){

    function deleteThis(id){
        props.setTodos(everyItem => 
           everyItem.filter(item => item.id !== id)
       )
       props.setShowDeleteModal(false)
   }

    return (
    <div className="modal">
        <div className="modal-body">
            <div className="modal-header"> 
                <h2>Delete</h2> 
            </div>

            <hr/>

            <div className="modal-content"> 
                Are you sure?
            </div>

            <hr/>

            <div className="modal-footer">
                <button onClick={()=>deleteThis(props.idToDelete)}> Yes </button> 
                <button onClick={()=> props.setShowDeleteModal(false)}> No </button>
            </div> 
        </div>

    </div>
    )
}

export default Main