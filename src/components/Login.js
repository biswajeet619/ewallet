import React, { useState } from "react";
import userJson from '../users.json';
import "./Login.css";
import { useHistory } from "react-router-dom";

import logo from '../avatar.png';

function Login() {
  let history = useHistory();
  let id = sessionStorage.getItem('id');
  var index=0;
  function handleLogin(uname, psw) {
    var count=0;
    
    for (var i = 0; i < userJson.length; i++) {
      var obj = userJson[i];
      // console.log(obj.customer);
      if (obj.id === uname && obj.pass === psw) {
        count=count+1;
        index=i;
      }
    }
    if(count===1){
      history.push("/wallet");
      sessionStorage.setItem('id',uname);
      sessionStorage.setItem('name',userJson[index].name);
      window.parent.location = window.parent.location.href;
    }
    else{
      alert("invalid username or password")
    }

  };

  return (
    <div>
      <div className="imgcontainer">
        <img src={logo} style={{ width: "8%", height: "8%", marginTop:"2%"}} alt="Avatar" className="avatar" />
      </div>

      <div className="container">
        <input className="input-t" type="text" placeholder="Enter Username" id="uname" required />

        <input className="input-t" type="password" placeholder="Enter Password" id="psw" required />

        <button className="button-t" onClick={() => handleLogin(document.getElementById('uname').value, document.getElementById('psw').value)}>Login</button>
      </div>
    </div>

  );
}


export default Login