import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({user}) =>{

//    <div className="container">
  //  <div className="row"></div>

  return(
  
    <div className="container">        {
     users.map((user, i) => {
   return(
    <Card 
    userkey = {users[i]._id}
    name = {users[i].name} 
    id = {users[i].id} 
    ipAdress = {users[i].ipAdress}
    phone = {users[i].phone}>
            
    </Card>
   );
  }  )
    }
</div>
);

       
      


}
    export default CardList;
