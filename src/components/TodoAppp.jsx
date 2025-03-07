import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { use } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";


const TodoAppp = () => {

 let [items, setitems] = useState([
  {id: 1, label: "Html & CSS", checked:true},
  {id:2 ,label:"Javascript", checked:true},
  {id:3 ,label:"React Js", checked:false},
 ])

 let [newitem,setNewItem] = useState("")
 let [isEditing, setIsEditing]=useState(false)

 let handleAddorSaveItem = ()=>{
 if(isEditing){
   let newListItems = items.map((item)=>{return item.id === currentElementId?{...item, label:newitem}:item})
   setCurrentElementId(null)
   setitems(newListItems)
   setNewItem("")
   setIsEditing(false)
 }
 else{
    setitems([...items,{id: items.length+1, label:newitem, checked:false}])
    setNewItem("")
 }}

 
 let [currentElementId, setCurrentElementId] = useState(null)

 let handleUpdate = (id)=>{
  let listItem = items.find(item=> item.id ===id)
  setNewItem(listItem.label)
  setIsEditing(true)
  setCurrentElementId(id)

 }

 let handleChecked =(id)=>{
  let newListItems = items.map((item)=>{
    return item.id === id ? {...item, checked: !item.checked} : item;
  });

  setitems(newListItems)

 }

 let handleDelete = (id)=>{
  let newItems = items.filter(item => item.id !== id).map((item ,index)=>{return{...item,id:index+1}})
  setitems(newItems)
  setNewItem("")
  setIsEditing(false)

 }

  return (
    <main>
      <div>
        <input 
        type="text" 
        value={newitem} 
        placeholder='add new item'
        onChange={(e)=>{setNewItem(e.target.value)}}
        />
        <button onClick={handleAddorSaveItem}>{isEditing? <FaSave color='blue'/>:<IoIosAddCircle color='green' />
        }</button>
      </div>
      <ul>
        {
          items.map((item)=>{
            return(
              <li key={item.id} className='item'>
                <input type="checkbox" checked={item.checked} onChange={()=>handleChecked(item.id)}/>
                <label>{item.label}</label>
                <FaEdit id="edit" rolr="button" tabIndex={0} onClick={()=>handleUpdate(item.id)}/>

                <FaTrashCan id="delete" roll="button" tabIndex={0} onClick={()=>handleDelete(item.id)}/>
              </li>
            )


          })
        }

      </ul>
     
    </main>
  )
}

export default TodoAppp