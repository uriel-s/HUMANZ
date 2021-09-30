import React from 'react';
import Axios from 'axios';


const Card = ({_id,name, id, ipAdress,phone ,city,country}) =>{


    const deleteFromDatabase =()=>{
        Axios.delete(`http://localhost:5000/users/delete/${_id}`)
        window.location.reload(false)
        };


        const upDateLocation =()=>{
            console.log("upDateLocation!!!!!!!")
            Axios.post(`http://localhost:5000/users/find/${_id}/${ipAdress}`)
            window.location.reload(true)
            };
    
    const picUrl = id.slice(0,1);
    return(


        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
        <div className="card bg-white d-flex align-items-center justify-content-center">
<div className="w-100"><img 
src={`https://randomuser.me/api/portraits/men/${picUrl}.jpg`}
alt="" className="rounded-circle"></img></div>                <div className="text-center ">
                <p className="name">{name}</p>
                <p className="job">phone: {phone}</p>
                <p className=" "> IP : {ipAdress}</p>
                <p className=" ">id : {id}</p>
                {city ? 
                <p className="dis ">city : {city}</p> 
                : <h1></h1>}
                { country ?
                <p className="dis ">country : {country}</p> 
                : <h1></h1>} 
                
                <button className ="f6 link dim br3 ph3 pv2 mb3 dib white bg-red btn btn-danger" onClick={deleteFromDatabase}>Delete</button>
                <button className ="f6 link dim br3 ph3 pv2 mb3 dib white bg-green ml3 btn btn-success" onClick={upDateLocation}>Find location</button>

            </div>
        </div>
    </div>

    );


    }
    export default Card;
