import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import {MdModeEdit } from "react-icons/md";


function NotesComp(props){

   function showAndKnowId() {
    props.showDeleteModal(true)
    props.setIdToDelete(props.numID)
   }


   function updateAndKnowID(){
    props.setInputTitle(props.data)
    props.setInputContent(props.content)
    props.setWillUpdateID(props.numID)
    props.setShowAddModal(prev => {
        return ({
            show :  !prev.show,
            status : 'update'
        })
    })
   }



    return(
        <div>
            <div className="my-actual-notes"> 
                <div className="checkbox-and-title">
                    <input type="checkbox" id={props.numID} className="my-checkbox"/>
                    <div className="title-and-time">
                        <label for={props.numID} >
                            <b>{props.data}</b>
                        </label> 
                        <p className="time-and-date">{props.date}, {props.time}</p>
                    </div>
                </div>
                

                <div className="icons">
                    <div className="icons-container">
                        <AiFillDelete size={26} className='icon-padding' onClick={showAndKnowId} />
                    </div>
                    <div className="icons-container">
                        <MdModeEdit size={26} className='icon-padding' onClick={updateAndKnowID}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesComp