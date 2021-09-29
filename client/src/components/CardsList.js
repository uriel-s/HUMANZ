import React from 'react';
import Card from './Card';

const CardList = ({users}) =>{


  return(
  
    <div className="container mt-80 row ">
    <div className="row ">   
         {
     users.map((user, i) => {
   return(
    <Card 
    _id = {users[i]._id}
    name = {users[i].name} 
    id = {users[i].id} 
    ipAdress = {users[i].ipAdress}
    phone = {users[i].phone}
    city = {users[i].city}
    country = {users[i].country}
    >

    
            
    </Card>
   );
  }  )
    }
</div>
</div>
);

       
      


}
    export default CardList;
