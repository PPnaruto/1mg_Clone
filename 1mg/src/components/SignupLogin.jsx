import * as React from "react";
import TextField from "@mui/material/TextField";

import { useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SignupLogin.css";

export function SignUpLogin({handleAuth}) {
  const [popup, setPopup] = useState(false);
  const [popLogin, setPopLogin] = useState(false);
  const [signUpBox, setSignBox] = useState(false);
  const [mob,setmob] = useState('') ;
  const [pass,setpass] = useState('') ;
 const [loginotp,setloginotp] = useState('') ;
  const handleChange = (e)=>{
    
    setpass(e.target.value) ;
  }
  const handlemobchange = (e)=>{
    setmob(e.target.value) ;
  }
  const handleloginotp = (e)=>{
    setloginotp(e.target.value)
  }
  const handleLogin = () => {
    setPopLogin(!popLogin);
  };
  const closeLogin = () => {
    setPopLogin(false);
    
   
  };
  const submitlogin = ()=>{
    if(loginotp==='1234'){
        alert('logged in successfully');
        localStorage.setItem('isAuth', true) ;
        handleAuth() ;
        setPopLogin(false);
    }
    else{
        alert('Enter Valid OTP')
        
    }
  }

  const handleSignUp = () => {
    setPopup(!popup);
  };

  const Signupfunc = () => {
    if(pass==='1234'){
        alert('Signed Up successfully');
        
    }
    else{
        alert('Please Enter Valid OTP')
    }
    setPopup(false);

  };

  return (
    <div>
      <span onClick={handleLogin} style={{position:"relative",cursor:"pointer"}}>Login</span>
      <span>&nbsp; | &nbsp;</span>
      <span onClick={handleSignUp} style={{cursor:"pointer"}}>Sign Up</span>

      <div>
        {/* signup started here */}
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <p onClick={Signupfunc}>
                  <CloseIcon style={{ fontSize: 15 }} />
                </p>
              </div>
              <div className="main-box">
                <div className="pop-box1">
                  <img
                    src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                    alt=""
                  />
                  <h3>Make Healthcare simpler</h3>
                  <p>
                    Order any medicine or health product and we’ll deliver it
                    for free. Enjoy discounts on everything.
                  </p>
                </div>
                <div className="box2">
                  <h2>Sign Up</h2>
                  <p className="otp">
                    Please enter your Mobile number to receive One Time Password
                    (OTP)
                  </p>

                  {signUpBox ? (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter OTP"
                        variant="standard"
                        margin="normal"
                        onChange={handleChange}
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Confirm Your OTP"
                      />
                      <button className="btn" onClick={Signupfunc}>
                      Confirm OTP
                      </button>
                    </div>
                  ) : (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter Mobile Number"
                        variant="standard"
                        margin="normal"
                       onChange={handlemobchange}
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Are you a healthcare professional? "
                      />
                      <button
                        className="btn"
                        onClick={() => {
                            console.log(mob)
                          setSignBox(!signUpBox);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  <div className="bottom">
                    <p>
                      Have an account? <strong className="click">Login</strong>
                    </p>
                    <p>
                      For corporate Sign up,{" "}
                      <strong className="click"> Click Here</strong>
                    </p>
                    <p className="small-txt">By signing up, you agree to our</p>
                    <p className="small-txt">
                      Terms and Conditions & Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* ----------------------- */}
      {/* Login started here */}
      <div>
        {popLogin ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <p onClick={closeLogin}>
                  <CloseIcon style={{ fontSize: 15 }} />
                </p>
              </div>
              <div className="main-box">
                <div className="pop-box1">
                  <img
                    src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                    alt=""
                  />
                  <h3>Make Healthcare simpler</h3>
                  <p>
                    Order any medicine or health product and we’ll deliver it
                    for free. Enjoy discounts on everything.
                  </p>
                </div>
                <div className="box2">
                  <h2>LogIn</h2>
                  <p className="otp">
                    Get access to your orders, lab tests & doctor consultations
                  </p>

                  {signUpBox ? (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter Your OTP"
                        variant="standard"
                        margin="normal"
                        onChange={handleloginotp} 
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Confirm Your OTP"
                      />
                      <button className="btn" onClick={submitlogin}>
                        Confirm OTP
                      </button>
                    </div>
                  ) : (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter Your Mobile or Email"
                        variant="standard"
                        margin="normal"
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Confirm Email or Mobile Number"
                      />
                      <button
                        className="btn"
                        onClick={() => {
                          setSignBox(!signUpBox);
                        }}
                      >
                        Login
                      </button>
                    </div>
                  )}

                  <div className="bottom">
                    <p>
                      New in 1mg? <strong className="click">Sign Up</strong>
                    </p>
                    <p>
                      Have a corporate account? ,{" "}
                      <strong className="click"> Click Here</strong>
                    </p>
                    <p className="small-txt">By logging in, you agree to our</p>
                    <p className="small-txt">
                      Terms and Conditions & Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}