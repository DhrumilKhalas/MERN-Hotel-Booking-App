import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import React, {useEffect} from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const userInLocalStorage = localStorage.getItem("user");
    const finalUser = JSON.parse(userInLocalStorage);

  useEffect(()=>{
   if(finalUser !== null){
    navigate("/")
   }
  }, [finalUser, navigate])

  return (
    <div className="login">
      <div className="lContainer">
        <div className="logininputinner">
          <div className="logininputlabel">
            <label htmlFor="loginusername">Username:</label>
          </div>
          <div className="logininputinput">
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              value={credentials.username}
              className="lInput"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div className="logininputinner">
          <div className="logininputlabel">
            <label htmlFor="loginpassword">Password:</label>
          </div>
          <div className="logininputinput">
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              value={credentials.password}
              className="lInput"
              autoComplete="off"
            />
          </div>
        </div>

        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
