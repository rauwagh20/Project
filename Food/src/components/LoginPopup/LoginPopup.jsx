import React, { useContext, useState, useEffect } from 'react';
import "./LoginPopup.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContax';
import axios from "axios";

function LoginPopup({ setShowLogin }) {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Reset form state when the component mounts
  useEffect(() => {
    setData({
      name: "",
      email: "",
      password: ""
    });
  }, [setShowLogin]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({
      ...data, [name]: value
    }));
  }

  const onLogin = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? null : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
        </div>
        <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continue, I agree to terms and conditions and privacy policy</p>
        </div>
        {currentState === "Login" 
          ? <p>Create a New Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
          : <p>Already Have An Account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  );
}

export default LoginPopup;
