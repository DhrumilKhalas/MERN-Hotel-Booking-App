import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import GoToTop from "./components/goToTop/GoToTop";
import Error from "./pages/error/Error";
import LocalArea from "../src/components/localArea/LocalArea";
import Contact from "./components/contact/Contact";
import Register from "./pages/register/Register";
import Payment from "./components/payment/Payment";

function App() {

  // const userInLocalStorage = localStorage.getItem("user");
  // const finalUser = JSON.parse(userInLocalStorage)

  // useEffect(()=>{
  //   console.log(finalUser)
  // }, [finalUser])
  
  
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hotels" element={<List />} />
          <Route exact path="/hotels/:id" element={<Hotel />} />
          {<Route exact path="/login" element={<Login />} />}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/localarea/ahmedabad" element={<LocalArea />} />
          <Route exact path="/localarea/mumbai" element={<LocalArea />} />
          <Route exact path="/localarea/delhi" element={<LocalArea />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/payment" element={<Payment/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <GoToTop />
      
    </>
  );
}

export default App;
