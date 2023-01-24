import React from "react";
import { nanoid } from "nanoid";

function Main(props){

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();


    let currentDate = `${month}/${day}/${year}`;
    const currTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })



    function submitHandler(e){
        e.preventDefault();

        if (props.showAddModal.status === 'update')
        {
            //const new array
            // if id is kamukha nung pinasa natin
            // yun ang ilalagay sa unahan ng array
            
            props.setTodos(pastTodo => 
               
                pastTodo.map(everyTodo => {
                    if (everyTodo.id === props.willUpdateID){
                        return ({
                            ...everyTodo,
                            title : props.inputTitle,
                            content : props.inputContent,
                            timeCreated: currTime,
                            dateCreated : currentDate
                        })
                    } 
                    else {
                        return everyTodo
                    }


                })
            )
        }

        else {
            props.setTodos([
                ...props.todos,
                {
                    title:props.inputTitle,
                    content: props.inputContent,
                    id : nanoid(),
                    finished: false,
                    timeCreated: currTime,
                    dateCreated : currentDate
                }
            ])
        }

        props.setShowAddModal(pastState => {
            return ({
                show: !pastState.show,
                status : 'add'
            })
        })

        props.setInputTitle('')
        props.setInputContent('')
    }


    function cancelButton(){
        props.setInputTitle('')
        props.setInputContent('')
        props.setShowAddModal(pastState => {
            return ({
                show: !pastState.show,
                status : 'add'
            })
        })
    }

    return(
        <div className="modal">
            <form>
                <div className="modal-body">
                    <div className="modal-header"> 
                        <input 
                            type="text" 
                            placeholder="Enter the title here" 
                            value={props.inputTitle}
                            onChange={(event)=>props.setInputTitle(event.target.value)}
                            >

                        </input>
                    </div>

                    <div className="modal-content"> 
                        <textarea 
                            cols={60} 
                            rows={25} 
                            placeholder={"Type your content here"}
                            value={props.inputContent}
                            onChange={(event)=>props.setInputContent(event.target.value)}
                            >
                        
                        </textarea>
                    </div>

                    <div className="modal-footer">
                        <button onClick={(e) => submitHandler(e)}>
                             Save 
                        </button> 
                        <button onClick={()=>cancelButton()}> Cancel </button>
                    </div> 
                </div>
            </form>
        </div>
    )
}

export default Main