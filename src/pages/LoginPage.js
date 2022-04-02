import { Link, Route } from "react-router-dom"
import React from 'react'
import './LoginPage.css';
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import { Login } from "../components/Login";

const LoginPage = () => {

     // const [usName, setUsName] = useState('');
     // const [usPassword, setUsPassword] = useState('');
     // console.log(usName)
     // const a = (login, password) => {
     //      if (user.password === usPassword) {
     //           console.log('yes')
     //           return (
     //                <Route path='/homePage' element={<HomePage />} />
     //           )
     //      }
     // }
     return ( 
          // <div className="aaa">
          //      <container className='header'>
          //           <div className="company">
          //                <h1>Company A</h1>
          //                <h2><Link to='/register'>Login</Link>
          //                </h2>
          //           </div>
          //      </container>

          //      <div className="register">
          //           <form className="login_form">
          //                <input type="text"
          //                     placeholder="User name"
          //                     value={usName}
          //                     onChange={e => setUsName(e.target.value)} />
          //                <input type="password"
          //                     placeholder="Password"
          //                     value={usPassword}
          //                     onChange={e => setUsPassword(e.target.value)} />
          //                <button>Sing in</button>
          //           </form>
          //      </div>

               // <div className="footer">
                    /* <h2>Footer</h2>
               </div>
               <p>
               </p>

          </div> */
          <div>
               <h1>Login</h1>
          <Login />
          <p>
               Or <Link to="/register">register</Link>
          </p>
          </div>

     )
}

export default LoginPage