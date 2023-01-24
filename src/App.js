import React from 'react';
import './App.css';
import Header from './component/Header.js'
import Buttons from './component/Buttons'
import NotesList from './component/Body'

import AddModal from './component/AddModal'
import DeleteModal from './component/DeleteModal'

import { nanoid } from 'nanoid';


function App() {

  const [showAddModal, setShowAddModal] = React.useState({show : false, status: 'add'})
  const [showDeleteModal, setShowDeleteModal] = React.useState(false) 

  const [inputTitle, setInputTitle] = React.useState('')
  const [inputContent, setInputContent] = React.useState('')

  const [todos, setTodos] = React.useState([{
    title:"First task of the day",
    content: "Pray",
    id : nanoid(),
    finished: false,
    timeCreated : '12:34 AM',
    dateCreated:  '1/9/2021'
  }])

  const [idToDelete, setIdToDelete] = React.useState('')

  const [willUpdateID, setWillUpdateID] = React.useState('')

  
 

  return (
    <div className="App">

      {showAddModal.show ? 
        <AddModal 


          showAddModal = {showAddModal}
          willUpdateID = {willUpdateID}

          setShowAddModal={setShowAddModal} 

          inputTitle={inputTitle} 
          setInputTitle={setInputTitle}
          inputContent = {inputContent}
          setInputContent={setInputContent}

          todos ={todos}
          setTodos = {setTodos}
        /> 
        : 
        ""
      }

      {showDeleteModal ? 
        <DeleteModal                            
          setShowDeleteModal={setShowDeleteModal}
          idToDelete = {idToDelete}
          setTodos={setTodos}
        /> 
        : 
        ""
      } 

      <Header/>
      <Buttons setShowAddModal={setShowAddModal} />
      <NotesList 
        setShowDeleteModal = {setShowDeleteModal} 
        todos = {todos}
        setTodos = {setTodos}
        setIdToDelete = {setIdToDelete}

        /* eto yung kasama sa mali */
        setInputTitle = {setInputTitle}
        setInputContent = {setInputContent}
        setShowAddModal = {setShowAddModal}

        /* try */
        setWillUpdateID = {setWillUpdateID}

      />
      
    </div>
  );
}

export default App;
