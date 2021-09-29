import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AddUser from "./components/AddUser";

import SearchBox from './components/SearchBox';
import CardList from './components/CardsList';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

  const  [Users, setUsers] = useState([]);
  const  [searchfield, setSearchfield] = useState("");
  const  [filterUsers, setFilterUsers] = useState(Users);
  const  [AddForm , setAddForm ] = useState("close")


  useEffect(() => {
    Axios.get("http://localhost:5000/users")
    .then( res => res.data)
    .then(data => {
      setUsers(data);
  })
  }, []);
          



  
  useEffect(() => {
    const filters = Users.filter(user =>{
      return user.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    setFilterUsers(filters);
  },[searchfield]);


  const onSearchChenge = (event) =>{
    setSearchfield(event.target.value)
  }
 
  const AddFormChange = () => {
    console.log("AddForm == ", AddForm)

   if( AddForm === "open")
    setAddForm("close");
    else if( AddForm === "close")
    setAddForm("open");
    }
  


  return (
    
    <div className="App">
          <h1 className='f1 '>HUMANZ</h1>

         { AddForm === "close" ?
           <i className="fas green fa-user-plus " onClick={AddFormChange}></i> :
           <AddUser AddFormChange={AddFormChange}/>

        }       
          <SearchBox searchChenge={onSearchChenge}/>


        {
          (filterUsers.length === 0)
          ? <CardList users ={Users}/>
          : <CardList users ={filterUsers}/>
        }
    </div>
  );
}

export default App;
