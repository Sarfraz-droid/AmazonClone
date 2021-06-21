import React,{useState} from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';



function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password).then((auth) => {
                history.push('/');
            }).catch(err => alert(err.message));
    }

    const register = e => {
        auth
            .createUserWithEmailAndPassword(email,password).then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/');
                }

            }).catch((err) =>  alert(err.message));
        e.preventDefault();
    }

    return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
          <h1>Sign-in</h1>

          <form>
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

              <h5>Password</h5>
              <input type="password" value={password}
                onChange={e => setpassword(e.target.value)}
              />
              <button 
              type="submit"
              onClick={signIn}
              className="login__signinbutton">Sign-In</button>
              <button 
              type="submit"
              onClick={register}
              className="login__registerbutton">Create your Amazon Account</button>
          </form>
      </div>

    </div>
  );
}

export default Login;
