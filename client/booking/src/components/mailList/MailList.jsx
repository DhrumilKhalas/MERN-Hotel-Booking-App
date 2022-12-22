import "./mailList.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const MailList = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrmuztn",
        "template_b55akpc",
        form.current,
        "sf7XkWDwCsm6g1u5I"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("success");
          // toast.success('Thank you for subscribing to our Email service. Check you Email box.', {autoClose:5000})
          document.getElementById("messageofsubscriptionid").innerHTML =
            "Thank you for subscribing to our Email service. Check you Email box.";
          setTimeout(() => {
            document.getElementById("messageofsubscriptionid").innerHTML = "";
          }, 10000);
        },
        (error) => {
          console.log(error.text);
          // console.log("error")
          // toast.error("Error while subscribing to our Email service. Please try again later!", {autoClose:5000})
          document.getElementById("messageofsubscriptionid").innerHTML =
            "Error occured while subscribing to our Email service. Please try again later!";
          setTimeout(() => {
            document.getElementById("messageofsubscriptionid").innerHTML = "";
          }, 10000);
        }
      );
  };
 
  return (

    <div className="mail">

      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>

      <form className="mailformfooter" ref={form} onSubmit={sendEmail}>

        <div className="mailInputContainer">
          <input
            type="text"
            placeholder="Your Email"
            name="email__id"
            required
            className="mailInputContainerinner"
          />
          <button type="submit" className="subscribebtn">
            Subscribe
          </button>
          <div
            className="messageofsubscription"
            id="messageofsubscriptionid"
          ></div>
        </div>

      </form>

    </div>
  );
};

export default MailList;
