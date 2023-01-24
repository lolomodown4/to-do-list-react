import React from "react";

function ButtonsComp(props){
    return(
        <div className="buttons-container">
            <button 
                className="add-task-button"
                onClick={()=>props.setShowAddModal(prev => {
                    return {
                        show : !prev.show,
                        status : 'add'
                    }
                })}>   
                Add task
            </button>
            <div>
                <select className="filter-button">
                    <option value="All"> All </option>
                    <option value="Latest"> Latest </option>
                    <option value="Oldest"> Oldest </option>
                </select>
            </div>
        </div>
    )
}

export default ButtonsComp
