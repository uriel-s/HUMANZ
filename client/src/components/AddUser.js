import React , {useState} from 'react';
import Axios from 'axios';
import './AddUser.css';

function AddUser({AddFormChange}){
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [phone, setPhone] = useState('');
    const [ipAdress, setIP] = useState('');

const isValid=()=>{
    if(
     name===''||     
    ipAdress===''||
    phone==="") { 
        alert ("Please fill in all the details:");
        return false
    }

    if( id.length!==9)
    { 
        alert ("ID need to be 9 digits");
        return false
    }
    
    if (isNaN(id))
    { 
        alert ("ID is not a number!");
        return false
    }
return true;
}

const addToDatabase =()=>{
   if(!isValid()){
   }
   else{
Axios.post("http://localhost:5000/users/add", {
    name: name, 
    id :id,
    ipAdress:ipAdress,
    phone:phone,
});
alert ("A new user has registered for the system");
window.location.reload(false)
   }
};


return(
    
    <div className="container2">
    <form action="">
        <div className="">
            <div className="col-md-12 mb-4 "> <input className="form-control" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/> </div>
        </div>
        <div className="">
            <div className="col-12 mb-4"> <input type="Number" placeholder="ID" className="form-control" onChange={e => setID(e.target.value)}/> </div>
        </div>
        
        <div className="row">
            <div className="col-12 mb-4"> <input type="" placeholder="IP Adress" className="form-control" onChange={e => setIP(e.target.value)}/> </div>
        </div>

            <div className="col-12 mb-4"> <input type="Number" placeholder="Phone Number" className="form-control" onChange={e => setPhone(e.target.value)}/> </div>


        <div className="row">
            <div className="col-12 mb-4">
                <div className="btn btn-primary d-block"  onClick={addToDatabase}> ADD  </div>
            </div>
        </div>
        <div className="lh-copy mt3">
        <i className="fas fa-times red " onClick={AddFormChange}></i> 

          </div>
    </form>
</div>
    )
}



export default AddUser;
