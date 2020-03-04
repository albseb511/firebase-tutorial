import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { fBaseTasks } from "./config/fbaseConfig"
import { fetchItems, addItems, delItem } from "./redux/actions"
import {connect} from "react-redux"

function App({ items, isLoading, fetchItems, addItems, delItem }) {
  const [name, setName] = useState('')
  
  useEffect(()=>{
    fetchItems()
    // update. dont use this, you need to pass the id
    // fBaseTasks.doc("VKnml5fbycXyqlKsCdeQ").update({
    //   status: true
    // })
  },[])
  
  const handleAdd = () => {
    let payload = {
      name
    }
    addItems(payload)
  }

  const handleDelete = (id) => {
    delItem(id)
  }

  return (
    <div className="App">
      {items && items.map(item=>(
        <div key={item.id}  >
          <div>
          {item.name} : {item.status?"true":"false"} 
          </div>
          <button onClick={()=>handleDelete(item.id)}>delete</button>
        </div>
      ))}
      <div>
        ADD
      </div>
      <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  addItems: (payload) => dispatch(addItems(payload)),
  delItem: (id) => dispatch(delItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
