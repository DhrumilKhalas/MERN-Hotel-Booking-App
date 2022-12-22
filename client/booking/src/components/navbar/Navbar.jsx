import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
 
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 310,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setOpen(true);
  };

  const handleLogoutTwo = () => {
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  }; 

  const handleLogoutThree = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">dhrumilbooking</span>
        </Link>
 
        {open && (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Are you sure you want to Log out?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="handleLogoutYesNoBtn">
                    <button
                      className="handleLogoutYesBtn"
                      onClick={handleLogoutTwo}
                    >
                      Yes
                    </button>
                    <button
                      className="handleLogoutNoBtn"
                      onClick={handleLogoutThree}
                    >
                      No
                    </button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
        )}

        {user ? (
          <div className="userNameanduserImgMain">

                  <div className="userNameanduserImgMainOne">

                      {user.img ? (

                            <>
                              <div className="userNameanduserImgtwo">
                                  <img
                                    src={user.img}
                                    className="userNameanduserImgtwoImg"
                                    alt="Not available"
                                  />
                              </div>

                              <div className="userNameanduserImgone">{user.username}</div>
                            </>

                        ) : (

                            <>

                              <div lassName="userNameanduserImgtwo">
                                  <img
                                    src="/images/NoProfilePicture.png"
                                    className="userNameanduserImgtwoImg"
                                    alt="Not available"
                                  />
                              </div>

                              <div className="userNameanduserImgone">{user.username}</div>
                            </>
                      )}

                  </div>

                  <div className="userNameanduserImgMainTwo">
                      <button className="userNameanduserLogout" onClick={handleLogout}>
                        Log out
                      </button>
                  </div>

          </div>

        ) : (
          
          <div className="navItems">
            <button
              className="navButton"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>
            <button
              className="navButton"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
