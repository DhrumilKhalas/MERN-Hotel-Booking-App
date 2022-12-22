import React, { useRef } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./contact.css";
import emailjs from "@emailjs/browser";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrmuztn",
        "template_aer8pqc",
        form.current,
        "sf7XkWDwCsm6g1u5I"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("hi")
          document.getElementById("emailmessage").innerHTML =
            "Your message has been sent successfully! We will contact you soon.";
          setTimeout(() => {
            document.getElementById("emailmessage").innerHTML = "";
          }, 10000);
          // toast.success('Message sent successfully! We will contact you soon.', {autoClose:5000})
        },
        (error) => {
          console.log(error.text);
          document.getElementById("emailmessage").innerHTML =
            "Error occured while sending your message. Please try again later!";
          setTimeout(() => {
            document.getElementById("emailmessage").innerHTML = "";
          }, 10000);
          // console.log("error")

          // toast.error('Error occured while sending message. Please try again later!', {autoClose:5000})
        }
      );
  };
  return (
    <>
      <Navbar />
      <Header type="list" />

      <form ref={form} onSubmit={sendEmail}>
        <div className="contactMain">
          <h1 className="contactHeading">Contact Us</h1>
          <div className="contactContent">
            <div className="contactContentOne">
              <div className="contactContentOneAddress">
                {/* <div className="contactContentOneLocationLogoMain"><LocationOnIcon className="contactContentOneAddressLogo"/></div> */}
                <div className="contactContentOneAddressHeadingMain">
                  <div className="contactContentOneAddressHeading">
                    Address:
                  </div>
                  <div className="contactContentOneAddressFullAddress">
                    3, Abcd Square, near Efghijk, Lmnopqrst, Ahmedabad, Gujarat
                    38XXXX
                  </div>
                </div>
              </div>
              <div className="contactContentOnePhone">
                {/* <div className="contactContentOnePhoneLogoMain" ><PhoneIcon className="contactContentOnePhoneLogo"/></div> */}
                <div className="contactContentOnePhoneHeadingMain">
                  <div className="contactContentOnePhoneHeading">Phone:</div>
                  <div className="contactContentOnePhoneFullPhone">
                    +91 798 4XX XXXX
                  </div>
                </div>
              </div>
              <div className="contactContentOneEmail">
                {/* <div className="contactContentOneEmailLogoMain"><EmailIcon className="contactContentOneEmailLogo"/></div> */}
                <div className="contactContentOneEmailHeadingMain">
                  <div className="contactContentOneEmailHeading">Email:</div>
                  <div className="contactContentOneEmailFullEmail">
                    dhrumilskhalas@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="contactContentTwo">
              <h2 className="contactContentTwoHeading">Send Message</h2>
              <div className="contactContentTwoInputs">
                <input
                  type="text"
                  placeholder="Full Name"
                  // name="fname"
                  name="from_name"
                  id="fullname"
                  className="contactContentTwoInputsOne"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  // name="useremail"
                  name="email_id"
                  id="useremailid"
                  className="contactContentTwoInputsTwo"
                  autoComplete="off"
                  required
                />

                <input
                  type="text"
                  placeholder="Type your Message..."
                  // name="usemsg"
                  name="message"
                  id="usermessage"
                  className="contactContentTwoInputsThree"
                  autoComplete="off"
                  required
                />
              </div>
              <button
                className="contactContentTwoButton"
                type="submit"
                id="sendbtnclick"
              >
                Send
              </button>
              <div className="emailmsg" id="emailmessage"></div>
            </div>
          </div>
        </div>
      </form>

      <div className="ContactFooter">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
