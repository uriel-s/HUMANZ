import React from 'react';
import './CardList.css';


const Card = ({id}) =>{

   

  

    const faceId = id.slice(0,1);
    return(


        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
        <div className="card bg-white d-flex align-items-center justify-content-center">
<div className="w-100"><img src={"https://images.pexels.com/photos/7467850/pexels-photo-7467850.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="" className="rounded-circle"></img></div>                <div className="text-center ">
                <p className="name">Jason Smith</p>
                <p className="job">ENGINE MECHANIC</p>
                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li className="icon "><span className="fab fa-twitter"></span></li>
                    <li className="icon mx-2"><span className="fab fa-facebook"></span></li>
                    <li className="icon me-2"><span className="fab fa-google-plus"></span></li>
                    <li className="icon "><span className="fab fa-instagram"></span></li>
                </ul>
                <p className="dis pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.</p>
            </div>
        </div>
    </div>

    );


    }
    export default Card;
