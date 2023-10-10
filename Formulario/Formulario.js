import React from 'react';
import './Formulario.css';

function Formulario(){
    return (
        <div className="container">
  <form action="/action_page.php">
    <label className="Sign" form='SignIn'>Sign In</label><br></br><br></br>

    <label for="Nome">Name</label>
    <input className="Nome" type="text" id="Nome" name="Nome" placeholder="Your name.."></input>

    <label for="email">E-mail</label>
    <input type="text" id="email" name="email" placeholder="Your E-mail.."></input>
    
    <label for="Password">Password</label>
    <input type="text" id="pass" name="pass" placeholder="Shiiii..."></input><br></br>

        <div>
        <input type="submit" value="Submit"
        ></input> 
        </div>
    
        </form>
        </div>
       
    );
}

export default Formulario;