import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Header type="list" typeThree="listSecond" />

      {/* <div className="errormainmain"> */}

      <div className="errorMain">
        <div className="errorImgMain">
          <img
            src="https://media.istockphoto.com/photos/error-404-picture-id171302206?k=20&m=171302206&s=612x612&w=0&h=xwyJMko3sha9u5Vx8QGSQjsD17a14riVdkCF7GPIXKQ="
            alt=""
            className="errorImg"
          />
        </div>

        <div className="errorOtherThanImg">
          <div className="errorTextOne">OOPS! PAGE NOT FOUND</div>
          <div className="errorTextTwo">
            Sorry, The page you are looking for could not be found.
          </div>

          <div className="errorBtn">
            <div className="errorBackBtnMain">
              <button className="errorBackBtn">
                {/* <div className="errorbackBtnIcon"><WestIcon/></div>  */}
                <div
                  className="errorBackBtnText"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  GO TO PREVIOUS PAGE
                </div>
              </button>
            </div>
            <div className="errorHomeBtnMain">
              <button className="errorHomeBtn">
                {/* <div className="errorHomeBtnIcon"><HomeIcon /></div>  */}
                <div
                  className="errorHomeBtnText"
                  onClick={() => {
                    navigate("/");
                  }} 
                >
                  GO TO HOME PAGE
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Error;
