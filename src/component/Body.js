import React from "react";
import Notes from "./Notes"

function BodyComp(props){
   

    const todosElements = props.todos.map(everytodo => {
        return (
            <Notes 
                key = {everytodo.id}
                data={everytodo.title} 
                content={everytodo.content} 
                numID={everytodo.id} 
                showDeleteModal ={props.setShowDeleteModal} 
                setTodos={props.setTodos} 

                //set ng id for delte and update
                setIdToDelete={props.setIdToDelete}
                setWillUpdateID = {props.setWillUpdateID}
                

                //para sa update to
                setInputTitle = {props.setInputTitle}
                setInputContent = {props.setInputContent}
                setShowAddModal = {props.setShowAddModal}

                /* time */
                time = {everytodo.timeCreated}
                date = {everytodo.dateCreated}

            />
        )
        
    })

    return(
        <div className="notes-container">
            {todosElements}
        </div> 
    )
}

export default BodyComp