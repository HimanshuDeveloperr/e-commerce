import React, { useContext, useRef,useState} from 'react';
import "./login.css"
import { useNavigate } from "react-router-dom";
import TokenContesxt from '../Store/TokenContext';


const Login = () => {
  const emailRef=useRef("")
  const passwordRef=useRef("")
  const [isLogin, setIsLogin] = useState(true);
const history=useNavigate()

const authctx=useContext(TokenContesxt)

  const switchLoginModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with email and password, like sending them to a server for authentication
    const email=emailRef.current.value
    const password=passwordRef.current.value

    let url;

    if(isLogin){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwcmuoONweEihagskysMZov0iZmABYTCM"
    }
    else{
        url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwcmuoONweEihagskysMZov0iZmABYTCM"
    }

    fetch(url,{
        method:"POST",
        body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            return response.json().then((data)=>{
                let error="authentication-failed"

                throw new Error(error);
            })
        }
    }).then((data)=>{
        console.log(data)
        history("/store")
        authctx.login(data.idToken)
    }).catch((error)=>{
        alert(error.message)
    })

    
  }

  return (
    <div>
      <h1>welcome to my e-commerce website</h1>
      <h1>{isLogin? "Please Login to buy" :"Please SignUp to get access" }</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
        </label>
          <input type="email" ref={emailRef}  />
        <label>
          Password:
        </label>
          <input type="password" ref={passwordRef} />
        <button type="submit">{isLogin?"Login":"signUp"}</button>
        <div>

        <button onClick={switchLoginModeHandler} >
              {isLogin ? "Create New Account" : "Login with existing account"}
            </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
