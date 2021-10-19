import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useGoogleLogin } from 'react-google-login';
import "./Login.css";
import { refreshTokenSetup } from '../utils/refreshToken';
import logo from '../google.png';

const clientId='849175242152-oeo4psb2to7p6q9pbb1nkgi50ka7pin9.apps.googleusercontent.com'
function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    sessionStorage.setItem('email', res.profileObj.email)
    sessionStorage.setItem('uname', res.profileObj.name)
    
    refreshTokenSetup(res);
  };
  

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">

      <img src={logo} alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}


export default Login