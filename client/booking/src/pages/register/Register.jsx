import React, { useState, useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    rusername: undefined,
    remail: undefined,
    rcountry: undefined,
    rcity: undefined,
    rphone: undefined,
    rpassword: undefined,
    rimageurl: undefined,
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setRegisterDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // console.log(registerDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios
      .post("/auth/register", {
        username: registerDetails.rusername,
        email: registerDetails.remail,
        country: registerDetails.rcountry,
        city: registerDetails.rcity,
        phone: registerDetails.rphone,
        password: registerDetails.rpassword,
        imageurl: registerDetails.rimageurl,
      })
      .catch((err) => {
        document.getElementById("successerrordiv").innerHTML =
          "User Registration Unsuccessful. Please try again later!";

        setTimeout(() => {
          document.getElementById("successerrordiv").innerHTML = "";
        }, 10000);

        // console.log(err);
        // console.log("hello");

        return;
      });

    const data = await res.data;

    if (!data) {
      document.getElementById("successerrordiv").innerHTML =
        "User Registration Unsuccessful. Please try again later!";

      setTimeout(() => {
        document.getElementById("successerrordiv").innerHTML = "";
      }, 10000);

      return;
    } else {
      alert("User Registration Successful!");
      navigate("/login");
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
    <>
      <form className="registerform" onSubmit={handleSubmit}>
        <div className="rinput">
          <label htmlFor="rusername" className="rinputl">
            Username:
          </label>
          <input
            className="rinputinnner"
            type="text"
            id="rusername"
            onChange={handleInputs}
            placeholder="username"
            autoComplete="off"
            required
          />
        </div>

        <div className="rinput">
          <label htmlFor="remail" className="rinputl">
            Email:
          </label>
          <input
            className="rinputinnner"
            type="email"
            placeholder="email"
            id="remail"
            autoComplete="off"
            required
            onChange={handleInputs}
          />
        </div>

        <div className="rinput">
          <label htmlFor="rcountry" className="rinputl">
            Country:
          </label>
          <input
            className="rinputinnner"
            type="text"
            placeholder="country"
            autoComplete="off"
            required
            id="rcountry"
            onChange={handleInputs}
          />
        </div>

        <div className="rinput">
          <label htmlFor="rcity" className="rinputl">
            City:
          </label>
          <input
            className="rinputinnner"
            type="text"
            placeholder="city"
            autoComplete="off"
            required
            id="rcity"
            onChange={handleInputs}
          />
        </div>

        <div className="rinput">
          <label htmlFor="rphone" className="rinputl">
            Phone:
          </label>
          <input
            className="rinputinnner"
            type="text"
            placeholder="phone"
            autoComplete="off"
            required
            id="rphone"
            onChange={handleInputs}
          />
        </div>

        <div className="rinput">
          <label htmlFor="rpassword" className="rinputl">
            Password:
          </label>
          <input
            className="rinputinnner"
            type="password"
            placeholder="password"
            autoComplete="off"
            required
            id="rpassword"
            onChange={handleInputs}
          />
        </div>

        <div className="rinput">
          <label htmlFor="rimage" className="rinputl">
            Image URL:
          </label>
          <input
            className="rinputinnner"
            type="text"
            placeholder="image url"
            autoComplete="off"
            id="rimage"
            onChange={handleInputs}
          />
        </div>

        <div className="rinput">
          <button type="submit" className="rinputbtn">
            Register
          </button>
        </div>

        <div className="rinput" id="successerrordiv"></div>
      </form>
    </>
  );
};

export default Register;
